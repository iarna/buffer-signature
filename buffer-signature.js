'use strict'
const filetypes = require('./signatures.js')
const Transform = require('readable-stream').Transform

const identify = exports.identify = function (buf) {
  for (let ft of filetypes) {
    signatures: for (let sig of ft.signatures) {
      let matches = true
      for (let ii = 0; ii < sig.length; ii += 2) {
        const offset = sig[ii]
        const byteSeq = sig[ii+1]
        if (!byteSeq.equals(buf.slice(offset, offset + byteSeq.length))) {
          matches = false
          continue signatures
        }
      }
      if (matches) {
        return {
          mimeType: ft.mimeType || 'application/octet-stream',
          description: ft.description || '',
          extensions: ft.extensions || []
        }
      }
    }
  }
  return {
    unknown: true,
    mimeType: 'application/octet-stream',
    description: 'Unknown',
    extensions: []
  }
}

exports.identifyStream = function (cb) {
  let finished = false
  let buf = []
  let bufSize = 0
  return new Transform({transform: function (chunk, _, done) {
    if (!finished) {
      buf.push(chunk)
      bufSize += chunk.length
      if (bufSize >= 22) {
        finished = true
        cb(identify(Buffer.concat(buf, bufSize)))
      }
    }
    this.push(chunk)
    done()
  }})
}
