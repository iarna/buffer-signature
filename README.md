# buffer-signature

Get the mimetype of a buffer based on its contents.

Data for this script was generated from:
http://en.wikipedia.org/wiki/List_of_file_signatures

Additional support for mp4 and mov formats from [@cmd430](https://github.com/cmd430)

This is a fork of [file-signature](https://npmjs.com/package/file-signature)
by [@leahcimic](https://www.npmjs.com/~leahcimic).

To match against any file format, you'll need a minimum of 22 bytes from the
start of the file.

## Example use:
```js

var identifyBuffer = require('buffer-signature').identify;
console.log(identifyBuffer(fs.readFileSync('path/to/file.jpg')));

var identifyStream = require('buffer-signature').identifyStream;
fs.createReadStream('path/to/file.jpg').pipe(identifyStream(info => {
  console.log(info)
}).pipe(…whatever else you want to do with the data…)

// outputs:
// {
//   description: 'A commonly used method of lossy compression for digital photography (image).',
//   mimeType: 'image/jpg'
//   extensions: ['jpg', 'jpeg']
// }
```

#### Changes form `file-signature`

* Made `identify` take a buffer instead of a filename
* Added `identifyStream`
* Refreshed magic number list from Wikipedia and fixed signature matcher to support offsets
* Added a bunch of missing mimetypes
* Ditched bespoke buffer equality function for `Buffer.equals`
