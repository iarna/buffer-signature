'use strict'
const test = require('tap').test
const fs = require('fs')
const fileSignature = require('../buffer-signature.js');

const examples = [
  {
    extension: 'gif',
    filename: __dirname + '/example.gif',
    mimeType: 'image/gif'
  },
  {
    extension: 'png',
    filename: __dirname + '/example.png',
    mimeType: 'image/png'
  },
  {
    extension: 'jpg',
    filename: __dirname + '/example.jpg',
    mimeType: 'image/jpeg'
  }
]

test('buffer matching', t => {
  t.plan(examples.length)
  for (let example of examples) {
    const info = fileSignature.identify(fs.readFileSync(example.filename));
    t.is(info.mimeType, example.mimeType, `correct mime type for ${example.extension}`)
  }
})

test('stream matching', t => {
  t.plan(examples.length)
  for (let example of examples) {
    fs.createReadStream(example.filename).pipe(fileSignature.identifyStream(info => {
      t.is(info.mimeType, example.mimeType, `correct mime type for ${example.extension}`)
    }))
  }
})
