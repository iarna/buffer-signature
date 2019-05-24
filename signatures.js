module.exports = [
  {
    extensions: [ 'pcap' ],
    description: 'Libpcap File Format&#91;1&#93;',
    signatures: [
      [0, Buffer.from([ 0xa1, 0xb2, 0xc3, 0xd4 ])],
      [0, Buffer.from([ 0xd4, 0xc3, 0xb2, 0xa1 ])]
    ],
  },
  {
    extensions: [ 'pcapng' ],
    description: 'PCAP Next Generation Dump File Format&#91;2&#93;',
    signatures: [
      [0, Buffer.from([ 0x0a, 0x0d, 0x0d, 0x0a ])]
    ],
  },
  {
    extensions: [ 'rpm' ],
    description: 'RedHat Package Manager (RPM) package &#91;3&#93;',
    signatures: [
      [0, Buffer.from([ 0xed, 0xab, 0xee, 0xdb ])]
    ],
  },
  {
    extensions: [ 'sqlitedb', 'sqlite', 'db' ],
    description: 'SQLite Database &#91;4&#93;',
    signatures: [
      [0, Buffer.from([ 0x53, 0x51, 0x4c, 0x69, 0x74, 0x65, 0x20, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x20, 0x33, 0x00 ])]
    ],
  },
  {
    extensions: [ 'bin' ],
    description: 'Amazon Kindle Update Package &#91;5&#93;',
    signatures: [
      [0, Buffer.from([ 0x53, 0x50, 0x30, 0x31 ])]
    ],
  },
  {
    extensions: [ 'PDB' ],
    description: 'PalmPilot Database/Document File',
    signatures: [
      [11, Buffer.from([ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'DBA' ],
    description: 'Palm Desktop Calendar Archive',
    signatures: [
      [0, Buffer.from([ 0xBE, 0xBA, 0xFE, 0xCA ])]
    ],
  },
  {
    extensions: [ 'DBA' ],
    description: 'Palm Desktop To Do Archive',
    signatures: [
      [0, Buffer.from([ 0x00, 0x01, 0x42, 0x44 ])]
    ],
  },
  {
    extensions: [ 'TDA' ],
    description: 'Palm Desktop Calendar Archive',
    signatures: [
      [0, Buffer.from([ 0x00, 0x01, 0x44, 0x54 ])]
    ],
  },
  {
    extensions: [ 'TDF$' ],
    description: 'Telegram Desktop File',
    signatures: [
      [0, Buffer.from([ 0x54, 0x44, 0x46, 0x24 ])]
    ],
  },
  {
    extensions: [ 'TDEF' ],
    description: 'Telegram Desktop Encrypted File',
    signatures: [
      [0, Buffer.from([ 0x54, 0x44, 0x45, 0x46 ])]
    ],
  },
  {
    description: 'Palm Desktop Data File (Access format)',
    signatures: [
      [0, Buffer.from([ 0x00, 0x01, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'ico' ],
    description: 'Computer icon encoded in ICO file format',
    mimeType: 'image/x-icon',
    signatures: [
      [0, Buffer.from([ 0x00, 0x00, 0x01, 0x00 ])]
    ],
  },
  {
    extensions: [ '3gp', '3g2' ],
    description: '3rd Generation Partnership Project 3GPP and 3GPP2 multimedia files',
    mimeType: 'video/3gpp',
    signatures: [
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70, 0x33, 0x67 ])]
    ],
  },
  {
    extensions: [ 'z', 'tar.z' ],
    description: 'compressed file (often tar zip) (using Lempel-Ziv-Welch algorithm)',
    signatures: [
      [0, Buffer.from([ 0x1F, 0x9D ])]
    ],
  },
  {
    extensions: [ 'z', 'tar.z' ],
    description: 'Compressed file (often tar zip) (using LZH algorithm)',
    signatures: [
      [0, Buffer.from([ 0x1F, 0xA0 ])]
    ],
  },
  {
    extensions: [ 'bac' ],
    description: 'File or tape containing a backup done with AmiBack on an Amiga.',
    signatures: [
      [0, Buffer.from([ 0x42, 0x41, 0x43, 0x4B, 0x4D, 0x49, 0x4B, 0x45, 0x44, 0x49, 0x53, 0x4B ])]
    ],
  },
  {
    extensions: [ 'bz2' ],
    description: 'Compressed file using Bzip2 algorithm',
    mimeType: 'application/x-bzip2',
    signatures: [
      [0, Buffer.from([ 0x42, 0x5A, 0x68 ])]
    ],
  },
  {
    extensions: [ 'gif' ],
    description: 'Image file encoded in the Graphics Interchange Format (GIF)',
    mimeType: 'image/gif',
    signatures: [
      [0, Buffer.from([ 0x47, 0x49, 0x46, 0x38, 0x37, 0x61 ])],
      [0, Buffer.from([ 0x47, 0x49, 0x46, 0x38, 0x39, 0x61 ])]
    ],
  },
  {
    extensions: [ 'tif', 'tiff' ],
    description: 'Tagged Image File Format',
    mimeType: 'image/tiff',
    signatures: [
      [0, Buffer.from([ 0x49, 0x49, 0x2A, 0x00 ])],
      [0, Buffer.from([ 0x4D, 0x4D, 0x00, 0x2A ])]
    ],
  },
  {
    extensions: [ 'cr2' ],
    description: 'Canon RAW Format Version 2',
    signatures: [
      [0, Buffer.from([ 0x49, 0x49, 0x2A, 0x00, 0x10, 0x00, 0x00, 0x00, 0x43, 0x52 ])]
    ],
  },
  {
    extensions: [ 'cin' ],
    description: 'Kodak Cineon image',
    signatures: [
      [0, Buffer.from([ 0x80, 0x2A, 0x5F, 0xD7 ])]
    ],
  },
  {
    description: 'Compressed file using Rob Northen Compression (version 1 and 2) algorithm',
    signatures: [
      [0, Buffer.from([ 0x52, 0x4E, 0x43, 0x01 ])],
      [0, Buffer.from([ 0x52, 0x4E, 0x43, 0x02 ])]
    ],
  },
  {
    extensions: [ 'dpx' ],
    description: 'SMPTE DPX image',
    signatures: [
      [0, Buffer.from([ 0x53, 0x44, 0x50, 0x58 ])],
      [0, Buffer.from([ 0x58, 0x50, 0x44, 0x53 ])]
    ],
  },
  {
    extensions: [ 'exr' ],
    description: 'OpenEXR image',
    signatures: [
      [0, Buffer.from([ 0x76, 0x2F, 0x31, 0x01 ])]
    ],
  },
  {
    extensions: [ 'bpg' ],
    description: 'Better Portable Graphics format',
    signatures: [
      [0, Buffer.from([ 0x42, 0x50, 0x47, 0xFB ])]
    ],
  },
  {
    extensions: [ 'jpg', 'jpeg' ],
    description: 'JPEG raw or in the JFIF or Exif file format',
    mimeType: 'image/jpeg',
    signatures: [
      [0, Buffer.from([ 0xFF, 0xD8, 0xFF, 0xDB ])],
      [0, Buffer.from([ 0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01 ])],
      [0, Buffer.from([ 0xFF, 0xD8, 0xFF, 0xEE ])],
      [0, Buffer.from([ 0xFF, 0xD8, 0xFF, 0xE1 ]), 6, Buffer.from([ 0x45, 0x78, 0x69, 0x66, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'ilbm', 'lbm', 'ibm', 'iff' ],
    description: 'IFF Interleaved Bitmap Image',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x49, 0x4C, 0x42, 0x4D ])]
    ],
  },
  {
    extensions: [ '8svx', '8sv', 'svx', 'snd', 'iff' ],
    description: 'IFF 8-Bit Sampled Voice',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x38, 0x53, 0x56, 0x58 ])]
    ],
  },
  {
    extensions: [ 'acbm', 'iff' ],
    description: 'Amiga Contiguous Bitmap',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x41, 0x43, 0x42, 0x4D ])]
    ],
  },
  {
    extensions: [ 'anbm', 'iff' ],
    description: 'IFF Animated Bitmap',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x41, 0x4E, 0x42, 0x4D ])]
    ],
  },
  {
    extensions: [ 'anim', 'iff' ],
    description: 'IFF CEL Animation',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x41, 0x4E, 0x49, 0x4D ])]
    ],
  },
  {
    extensions: [ 'faxx', 'fax', 'iff' ],
    description: 'IFF Facsimile Image',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x46, 0x41, 0x58, 0x58 ])]
    ],
  },
  {
    extensions: [ 'ftxt', 'txt', 'iff' ],
    description: 'IFF Formatted Text',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x46, 0x54, 0x58, 0x54 ])]
    ],
  },
  {
    extensions: [ 'smus', 'smu', 'mus', 'iff' ],
    description: 'IFF Simple Musical Score',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x53, 0x4D, 0x55, 0x53 ])]
    ],
  },
  {
    extensions: [ 'cmus', 'mus', 'iff' ],
    description: 'IFF Musical Score',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x43, 0x4D, 0x55, 0x53 ])]
    ],
  },
  {
    extensions: [ 'yuvn', 'yuv', 'iff' ],
    description: 'IFF YUV Image',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x59, 0x55, 0x56, 0x4E ])]
    ],
  },
  {
    extensions: [ 'iff' ],
    description: 'Amiga Fantavision Movie',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x46, 0x41, 0x4E, 0x54 ])]
    ],
  },
  {
    extensions: [ 'aiff', 'aif', 'aifc', 'snd', 'iff' ],
    description: 'Audio Interchange File Format',
    mimeType: 'audio/x-aiff',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x41, 0x49, 0x46, 0x46 ])]
    ],
  },
  {
    extensions: [ 'idx' ],
    description: 'Index file to a file or tape containing a backup done with AmiBack on an Amiga.',
    signatures: [
      [0, Buffer.from([ 0x49, 0x4E, 0x44, 0x58 ])]
    ],
  },
  {
    extensions: [ 'lz' ],
    description: 'lzip compressed file',
    signatures: [
      [0, Buffer.from([ 0x4C, 0x5A, 0x49, 0x50 ])]
    ],
  },
  {
    extensions: [ 'exe', 'dll' ],
    description: 'DOS MZ executable file format and its descendants (including NE and PE)',
    mimeType: 'application/x-msdownload',
    signatures: [
      [0, Buffer.from([ 0x4D, 0x5A ])]
    ],
  },
  {
    extensions: [ 'zip', 'jar', 'odt', 'ods', 'odp', 'docx', 'xlsx', 'pptx', 'vsdx', 'apk', 'aar' ],
    description: 'zip file format and formats based on it, such as JAR, ODF, OOXML',
    mimeType: 'application/zip',
    signatures: [
      [0, Buffer.from([ 0x50, 0x4B, 0x03, 0x04 ])],
      [0, Buffer.from([ 0x50, 0x4B, 0x05, 0x06 ])],
      [0, Buffer.from([ 0x50, 0x4B, 0x07, 0x08 ])]
    ],
  },
  {
    extensions: [ 'rar' ],
    description: 'RAR archive version 1.50 onwards',
    mimeType: 'application/x-rar-compressed',
    signatures: [
      [0, Buffer.from([ 0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x00 ])]
    ],
  },
  {
    extensions: [ 'rar' ],
    description: 'RAR archive version 5.0 onwards',
    mimeType: 'application/x-rar-compressed',
    signatures: [
      [0, Buffer.from([ 0x52, 0x61, 0x72, 0x21, 0x1A, 0x07, 0x01, 0x00 ])]
    ],
  },
  {
    description: 'Executable and Linkable Format',
    signatures: [
      [0, Buffer.from([ 0x7F, 0x45, 0x4C, 0x46 ])]
    ],
  },
  {
    extensions: [ 'png' ],
    description: 'Image encoded in the Portable Network Graphics format',
    mimeType: 'image/png',
    signatures: [
      [0, Buffer.from([ 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A ])]
    ],
  },
  {
    extensions: [ 'class' ],
    description: 'Java class file, Mach-O Fat Binary',
    mimeType: 'application/java-vm',
    signatures: [
      [0, Buffer.from([ 0xCA, 0xFE, 0xBA, 0xBE ])]
    ],
  },
  {
    description: 'UTF-8 encoded Unicode byte order mark, commonly seen in text files.',
    mimeType: 'text/plain',
    signatures: [
      [0, Buffer.from([ 0xEF, 0xBB, 0xBF ])]
    ],
  },
  {
    description: 'Mach-O binary (32-bit)',
    signatures: [
      [0, Buffer.from([ 0xFE, 0xED, 0xFA, 0xCE ])],
      [0x1000, Buffer.from([ 0xFE, 0xED, 0xFA, 0xCE ])]
    ],
  },
  {
    description: 'Mach-O binary (64-bit)',
    signatures: [
      [0, Buffer.from([ 0xFE, 0xED, 0xFA, 0xCF ])],
      [0x1000, Buffer.from([ 0xFE, 0xED, 0xFA, 0xCF ])]
    ],
  },
  {
    description: 'JKS JavakeyStore',
    signatures: [
      [0, Buffer.from([ 0xFE, 0xED, 0xFE, 0xED ])]
    ],
  },
  {
    description: 'Mach-O binary (reverse byte ordering scheme, 32-bit)',
    signatures: [
      [0, Buffer.from([ 0xCE, 0xFA, 0xED, 0xFE ])]
    ],
  },
  {
    description: 'Mach-O binary (reverse byte ordering scheme, 64-bit)',
    signatures: [
      [0, Buffer.from([ 0xCF, 0xFA, 0xED, 0xFE ])]
    ],
  },
  {
    description: 'Byte-order mark for text file encoded in little-endian 16-bit Unicode Transfer Format',
    signatures: [
      [0, Buffer.from([ 0xFF, 0xFE ])]
    ],
  },
  {
    description: 'Byte-order mark for text file encoded in little-endian 32-bit Unicode Transfer Format',
    signatures: [
      [0, Buffer.from([ 0xFF, 0xFE, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'ps' ],
    description: 'PostScript document',
    mimeType: 'application/postscript',
    signatures: [
      [0, Buffer.from([ 0x25, 0x21, 0x50, 0x53 ])]
    ],
  },
  {
    extensions: [ 'pdf' ],
    description: 'PDF document',
    mimeType: 'application/pdf',
    signatures: [
      [0, Buffer.from([ 0x25, 0x50, 0x44, 0x46, 0x2d ])]
    ],
  },
  {
    extensions: [ 'asf', 'wma', 'wmv' ],
    description: 'Advanced Systems Format',
    mimeType: 'video/x-ms-asf',
    signatures: [
      [0, Buffer.from([ 0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9, 0x00, 0xAA, 0x00, 0x62, 0xCE, 0x6C ])]
    ],
  },
  {
    description: 'System Deployment Image, a disk image format used by Microsoft',
    signatures: [
      [0, Buffer.from([ 0x24, 0x53, 0x44, 0x49, 0x30, 0x30, 0x30, 0x31 ])]
    ],
  },
  {
    extensions: [ 'ogg', 'oga', 'ogv' ],
    description: 'Ogg, an open source media container format',
    mimeType: 'audio/ogg',
    signatures: [
      [0, Buffer.from([ 0x4F, 0x67, 0x67, 0x53 ])]
    ],
  },
  {
    extensions: [ 'psd' ],
    description: "Photoshop Document file, Adobe Photoshop's native file format",
    mimeType: 'image/vnd.adobe.photoshop',
    signatures: [
      [0, Buffer.from([ 0x38, 0x42, 0x50, 0x53 ])]
    ],
  },
  {
    extensions: [ 'wav' ],
    description: 'Waveform Audio File Format',
    mimeType: 'audio/wav',
    signatures: [
      [0, Buffer.from([ 0x52, 0x49, 0x46, 0x46]), 8, Buffer.from([ 0x57, 0x41, 0x56, 0x45 ])]
    ],
  },
  {
    extensions: [ 'avi' ],
    description: 'Audio Video Interleave video format',
    mimeType: 'video/x-msvideo',
    signatures: [
      [0, Buffer.from([ 0x52, 0x49, 0x46, 0x46]), 8, Buffer.from([ 0x41, 0x56, 0x49, 0x20 ])]
    ],
  },
  {
    extensions: [ 'mp3' ],
    description: 'MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag',
    mimeType: 'audio/mpeg',
    signatures: [
      [0, Buffer.from([ 0xFF, 0xFB ])]
    ],
  },
  {
    extensions: [ 'mp3' ],
    description: 'MP3 file with an ID3v2 container',
    mimeType: 'audio/mpeg',
    signatures: [
      [0, Buffer.from([ 0x49, 0x44, 0x33 ])]
    ],
  },
  {
    extensions: [ 'mp4' ],
    description: 'MP4 is a digital multimedia format most commonly used to store video',
    mimeType: 'video/mp4',
    signatures: [
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6D, 0x6D, 0x70, 0x34 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x61, 0x76, 0x63, 0x31 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x69, 0x73, 0x6F, 0x32 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x69, 0x73, 0x6F, 0x6D ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6D, 0x70, 0x34, 0x31 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6D, 0x70, 0x34, 0x32 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6D, 0x70, 0x37, 0x31 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6D, 0x73, 0x6E, 0x76 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x61, 0x73 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x63 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x61, 0x73 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x68 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x6D ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x70 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x73 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x73, 0x68 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x78, 0x6D ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x78, 0x70 ])],
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x6E, 0x64, 0x78, 0x73 ])]
    ],
  },
  {
    extensions: [ 'mov' ],
    description: 'MOV file type, a video container, is a common multimedia format often used in Apple\'s Quicktime for saving movies and other video files',
    mimeType: 'video/quicktime',
    signatures: [
      [4, Buffer.from([ 0x66, 0x74, 0x79, 0x70 ]), 8, Buffer.from([ 0x71, 0x74, 0x20, 0x20 ])]
    ],
  },
  {
    extensions: [ 'bmp', 'dib' ],
    description: 'BMP file, a bitmap format used mostly in the Windows world',
    mimeType: 'image/bmp',
    signatures: [
      [0, Buffer.from([ 0x42, 0x4D ])]
    ],
  },
  {
    extensions: [ 'iso' ],
    description: 'ISO9660 CD/DVD image file',
    signatures: [
      [0x8001, Buffer.from([ 0x43, 0x44, 0x30, 0x30, 0x31 ])],
      [0x8801, Buffer.from([ 0x43, 0x44, 0x30, 0x30, 0x31 ])],
      [0x9001, Buffer.from([ 0x43, 0x44, 0x30, 0x30, 0x31 ])]
    ],
  },
  {
    extensions: [ 'fits' ],
    description: 'Flexible Image Transport System (FITS)',
    signatures: [
      [0, Buffer.from([ 0x53, 0x49, 0x4D, 0x50, 0x4C, 0x45, 0x20, 0x20 ])],
      [0, Buffer.from([ 0x3D, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x54 ])]
    ],
  },
  {
    extensions: [ 'flac' ],
    description: 'Free Lossless Audio Codec',
    mimeType: 'audio/x-flac',
    signatures: [
      [0, Buffer.from([ 0x66, 0x4C, 0x61, 0x43 ])]
    ],
  },
  {
    extensions: [ 'mid', 'midi' ],
    description: 'MIDI sound file',
    mimeType: 'audio/midi',
    signatures: [
      [0, Buffer.from([ 0x4D, 0x54, 0x68, 0x64 ])]
    ],
  },
  {
    extensions: [ 'doc', 'xls', 'ppt', 'msg' ],
    description: 'Compound File Binary Format, a container format used for document by older versions of Microsoft Office.[15] It is however an open format used by other programs as well.',
    signatures: [
      [0, Buffer.from([ 0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1 ])]
    ],
  },
  {
    extensions: [ 'dex' ],
    description: 'Dalvik Executable',
    signatures: [
      [0, Buffer.from([ 0x64, 0x65, 0x78, 0x0A, 0x30, 0x33, 0x35, 0x00 ])]
    ],
  },
  {
    extensions: [ 'vmdk' ],
    description: 'VMDK files',
    signatures: [
      [0, Buffer.from([ 0x4B, 0x44, 0x4D ])]
    ],
  },
  {
    extensions: [ 'crx' ],
    description: 'Google Chrome extension',
    mimeType: 'application/x-chrome-extension',
    signatures: [
      [0, Buffer.from([ 0x43, 0x72, 0x32, 0x34 ])]
    ],
  },
  {
    extensions: [ 'fh8' ],
    description: 'FreeHand 8 document',
    signatures: [
      [0, Buffer.from([ 0x41, 0x47, 0x44, 0x33 ])]
    ],
  },
  {
    extensions: [ 'cwk' ],
    description: 'AppleWorks 5 document',
    signatures: [
      [0, Buffer.from([ 0x05, 0x07, 0x00, 0x00, 0x42, 0x4F, 0x42, 0x4F, 0x05, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01 ])]
    ],
  },
  {
    extensions: [ 'cwk' ],
    description: 'AppleWorks 6 document',
    signatures: [
      [0, Buffer.from([ 0x06, 0x07, 0xE1, 0x00, 0x42, 0x4F, 0x42, 0x4F, 0x06, 0x07, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01 ])]
    ],
  },
  {
    extensions: [ 'toast' ],
    description: 'Roxio Toast disc image file, also some .dmg-files begin with same bytes',
    signatures: [
      [0, Buffer.from([ 0x45, 0x52, 0x02, 0x00, 0x00, 0x00 ])],
      [0, Buffer.from([ 0x8B, 0x45, 0x52, 0x02, 0x00, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'dmg' ],
    description: 'Apple Disk Image file',
    mimeType: 'application/x-apple-diskimage',
    signatures: [
      [0, Buffer.from([ 0x78, 0x01, 0x73, 0x0D, 0x62, 0x62, 0x60 ])]
    ],
  },
  {
    extensions: [ 'xar' ],
    description: 'eXtensible ARchive format',
    mimeType: 'application/vnd.xara',
    signatures: [
      [0, Buffer.from([ 0x78, 0x61, 0x72, 0x21 ])]
    ],
  },
  {
    extensions: [ 'dat' ],
    description: 'Windows Files And Settings Transfer Repository',
    signatures: [
      [0, Buffer.from([ 0x50, 0x4D, 0x4F, 0x43, 0x43, 0x4D, 0x4F, 0x43 ])]
    ],
  },
  {
    extensions: [ 'nes' ],
    description: 'Nintendo Entertainment System ROM file',
    signatures: [
      [0, Buffer.from([ 0x4E, 0x45, 0x53, 0x1A ])]
    ],
  },
  {
    extensions: [ 'tar' ],
    description: 'tar archive&#91;34&#93;',
    signatures: [
      [0x101, Buffer.from([ 0x75, 0x73, 0x74, 0x61, 0x72, 0x00, 0x30, 0x30 ])],
      [0x101, Buffer.from([ 0x75, 0x73, 0x74, 0x61, 0x72, 0x20, 0x20, 0x00 ])]
    ],
  },
  {
    extensions: [ 'tox' ],
    description: 'Open source portable voxel file',
    signatures: [
      [0, Buffer.from([ 0x74, 0x6F, 0x78, 0x33 ])]
    ],
  },
  {
    extensions: [ 'MLV' ],
    description: 'Magic Lantern Video file',
    signatures: [
      [0, Buffer.from([ 0x4D, 0x4C, 0x56, 0x49 ])]
    ],
  },
  {
    description: 'Windows Update Binary Delta Compression',
    signatures: [
      [0, Buffer.from([ 0x44, 0x43, 0x4D, 0x01, 0x50, 0x41, 0x33, 0x30 ])]
    ],
  },
  {
    extensions: [ '7z' ],
    description: '7-Zip File Format',
    mimeType: 'application/x-7z-compressed',
    signatures: [
      [0, Buffer.from([ 0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C ])]
    ],
  },
  {
    extensions: [ 'gz', 'tar.gz' ],
    description: 'GZIP',
    signatures: [
      [0, Buffer.from([ 0x1F, 0x8B ])]
    ],
  },
  {
    extensions: [ 'xz', 'tar.xz' ],
    description: 'XZ compression utility using LZMA2 compression',
    signatures: [
      [0, Buffer.from([ 0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'lz4' ],
    description: 'LZ4 Streaming Format',
    signatures: [
      [0, Buffer.from([ 0x04, 0x22, 0x4D, 0x18 ])]
    ],
  },
  {
    extensions: [ 'cab' ],
    description: 'Microsoft Cabinet file',
    mimeType: 'application/vnd.ms-cab-compressed',
    signatures: [
      [0, Buffer.from([ 0x4D, 0x53, 0x43, 0x46 ])]
    ],
  },
  {
    description: 'Microsoft compressed file in Quantum format, used prior to Windows XP.  File can be decompressed using Extract.exe or Expand.exe distributed with earlier versions of Windows.',
    signatures: [
      [0, Buffer.from([ 0x53, 0x5A, 0x44, 0x44, 0x88, 0xF0, 0x27, 0x33 ])]
    ],
  },
  {
    extensions: [ 'flif' ],
    description: 'Free Lossless Image Format',
    signatures: [
      [0, Buffer.from([ 0x46, 0x4C, 0x49, 0x46 ])]
    ],
  },
  {
    extensions: [ 'mkv', 'mka', 'mks', 'mk3d', 'webm' ],
    description: 'Matroska media container, including WebM',
    mimeType: 'video/x-matroska',
    signatures: [
      [0, Buffer.from([ 0x1A, 0x45, 0xDF, 0xA3 ])]
    ],
  },
  {
    extensions: [ 'stg' ],
    description: 'SEAN : Session Analysis Training file',
    signatures: [
      [0, Buffer.from([ 0x4D, 0x49, 0x4C, 0x20 ])]
    ],
  },
  {
    extensions: [ 'djvu', 'djv' ],
    description: 'DjVu document',
    mimeType: 'image/vnd.djvu',
    signatures: [
      [0, Buffer.from([ 0x41, 0x54, 0x26, 0x54, 0x46, 0x4F, 0x52, 0x4D]), 8, Buffer.from([ 0x44, 0x4A, 0x56 ])]
    ],
  },
  {
    extensions: [ 'der' ],
    description: 'DER encoded X.509 certificate',
    mimeType: 'application/x-x509-ca-cert',
    signatures: [
      [0, Buffer.from([ 0x30, 0x82 ])]
    ],
  },
  {
    extensions: [ 'dcm' ],
    description: 'DICOM Medical File Format',
    signatures: [
      [0x80, Buffer.from([ 0x44, 0x49, 0x43, 0x4D ])]
    ],
  },
  {
    extensions: [ 'woff' ],
    description: 'WOFF File Format 1.0',
    mimeType: 'application/font-woff',
    signatures: [
      [0, Buffer.from([ 0x77, 0x4F, 0x46, 0x46 ])]
    ],
  },
  {
    extensions: [ 'woff2' ],
    description: 'WOFF File Format 2.0',
    mimeType: 'application/font-woff2',
    signatures: [
      [0, Buffer.from([ 0x77, 0x4F, 0x46, 0x32 ])]
    ],
  },
  {
    extensions: [ 'xml' ],
    description: 'eXtensible Markup Language when using the ASCII character encoding',
    mimeType: 'application/xml',
    signatures: [
      [0, Buffer.from([ 0x3c, 0x3f, 0x78, 0x6d, 0x6c, 0x20 ])]
    ],
  },
  {
    extensions: [ 'wasm' ],
    description: 'WebAssembly binary format',
    signatures: [
      [0, Buffer.from([ 0x6d, 0x73, 0x61, 0x00 ])]
    ],
  },
  {
    extensions: [ 'lep' ],
    description: 'lepton compressed jpeg image',
    signatures: [
      [0, Buffer.from([ 0xcf, 0x84, 0x01 ])]
    ],
  },
  {
    extensions: [ 'swf' ],
    description: 'flash .swf',
    signatures: [
      [0, Buffer.from([ 0x43, 0x57, 0x53 ])],
      [0, Buffer.from([ 0x46, 0x57, 0x53 ])]
    ],
  },
  {
    extensions: [ 'deb' ],
    description: 'linux deb file',
    signatures: [
      [0, Buffer.from([ 0x21, 0x3C, 0x61, 0x72, 0x63, 0x68, 0x3E ])]
    ],
  },
  {
    extensions: [ 'webp' ],
    description: 'Google WebP image file',
    signatures: [
      [0, Buffer.from([ 0x52, 0x49, 0x46, 0x46 ]), 8, Buffer.from([ 0x57, 0x45, 0x42, 0x50 ])]
    ],
  },
  {
    description: 'U-Boot / uImage. Das U-Boot Universal Boot Loader.&#91;43&#93;',
    signatures: [
      [0, Buffer.from([ 0x27, 0x05, 0x19, 0x56 ])]
    ],
  },
  {
    extensions: [ 'rtf' ],
    description: 'Rich Text Format',
    signatures: [
      [0, Buffer.from([ 0x7B, 0x5C, 0x72, 0x74, 0x66, 0x31 ])]
    ],
  },
  {
    description: 'Microsoft Tape Format',
    signatures: [
      [0, Buffer.from([ 0x54, 0x41, 0x50, 0x45 ])]
    ],
  },
  {
    extensions: [ 'ts tsv tsa ' ],
    description: 'MPEG Transport Stream  (MPEG-2 Part 1)',
    signatures: [
      [0, Buffer.from([ 0x47 ]), 0xBC, Buffer.from([ 0x47 ]), 0x178, Buffer.from([ 0x47 ])]
    ],
  },
  {
    extensions: [ 'm2p vob ' ],
    description: 'MPEG Program Stream  (MPEG-1 Part 1 (essentially identical) and MPEG-2 Part 1)',
    signatures: [
      [0, Buffer.from([ 0x00, 0x00, 0x01, 0xBA ])]
    ],
  },
  {
    extensions: [ 'mpg mpeg ' ],
    description: 'MPEG Program Stream\nMPEG Transport Stream\nMPEG-1 video and MPEG-2 video  (MPEG-1 Part 2 and MPEG-2 Part 2)',
    signatures: [
      [0, Buffer.from([ 0x00, 0x00, 0x01, 0xBA ])],
      [0, Buffer.from([ 0x47 ])],
      [0, Buffer.from([ 0x00, 0x00, 0x01, 0xB3 ])]
    ],
  },
  {
    extensions: [ 'zlib' ],
    description: 'No Compression/low\nDefault Compression\nBest Compression',
    signatures: [
      [0, Buffer.from([ 0x78, 0x01 ])],
      [0, Buffer.from([ 0x78, 0x9C ])],
      [0, Buffer.from([ 0x78, 0xDA ])]
    ],
  },
  {
    extensions: [ 'lzfse' ],
    description: 'LZFSE - Lempel-Ziv style data compression algorithm using Finite State Entropy coding. OSS by Apple.&#91;44&#93;',
    signatures: [
      [0, Buffer.from([ 0x62, 0x76, 0x78, 0x32 ])]
    ],
  },
  {
    extensions: [ 'orc' ],
    description: 'Apache ORC (Optimized Row Columnar) file format',
    signatures: [
      [0, Buffer.from([ 0x4F, 0x52, 0x43 ])]
    ],
  },
  {
    extensions: [ 'avro' ],
    description: 'Apache Avro binary file format',
    signatures: [
      [0, Buffer.from([ 0x4F, 0x62, 0x6A, 0x01 ])]
    ],
  },
  {
    extensions: [ 'rc' ],
    description: 'RCFile columnar file format',
    signatures: [
      [0, Buffer.from([ 0x53, 0x45, 0x51, 0x36 ])]
    ],
  },
  {
    extensions: [ 'p25 obt ' ],
    description: 'PhotoCap Object Templates',
    signatures: [
      [0, Buffer.from([ 0x65, 0x87, 0x78, 0x56 ])]
    ],
  },
  {
    extensions: [ 'pcv' ],
    description: 'PhotoCap Vector',
    signatures: [
      [0, Buffer.from([ 0x55, 0x55, 0xaa, 0xaa ])]
    ],
  },
  {
    extensions: [ 'pbt pdt pea peb pet pgt pict pjt pkt pmt ' ],
    description: 'PhotoCap Template',
    signatures: [
      [0, Buffer.from([ 0x78, 0x56, 0x34 ])]
    ],
  },
  {
    description: 'Apache Parquet columnar file format',
    signatures: [
      [0, Buffer.from([ 0x50, 0x41, 0x52, 0x31 ])]
    ],
  },
  {
    extensions: [ 'ez2' ],
    description: 'Emulator Emaxsynth samples',
    signatures: [
      [0, Buffer.from([ 0x45, 0x4D, 0x58, 0x32 ])]
    ],
  },
  {
    extensions: [ 'ez3 iso ' ],
    description: 'Emulator III synth samples',
    signatures: [
      [0, Buffer.from([ 0x45, 0x4D, 0x55, 0x33 ])]
    ],
  },
  {
    extensions: [ 'luac' ],
    description: 'Lua bytecode&#91;45&#93;',
    signatures: [
      [0, Buffer.from([ 0x1B, 0x4C, 0x75, 0x61 ])]
    ],
  },
  {
    extensions: [ 'alias' ],
    description: 'macOS file Alias&#91;46&#93; (Symbolic link)',
    signatures: [
      [0, Buffer.from([ 0x62, 0x6F, 0x6F, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x61, 0x72, 0x6B, 0x00, 0x00, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'Identifier' ],
    description: 'Microsoft Zone Identifier for URL Security Zones&#91;47&#93;',
    signatures: [
      [0, Buffer.from([ 0x5B, 0x5A, 0x6F, 0x6E, 0x65, 0x54, 0x72, 0x61, 0x6E, 0x73, 0x66, 0x65, 0x72, 0x5D ])]
    ],
  },
  {
    extensions: [ 'eml' ],
    description: 'Email Message var5&#91;48&#93;',
    signatures: [
      [0, Buffer.from([ 0x52, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x64 ])]
    ],
  },
  {
    extensions: [ 'tde' ],
    description: 'Tableau Datasource',
    signatures: [
      [0, Buffer.from([ 0x20, 0x02, 0x01, 0x62, 0xA0, 0x1E, 0xAB, 0x07, 0x02, 0x00, 0x00, 0x00 ])]
    ],
  },
  {
    extensions: [ 'kdb' ],
    description: 'KDB file',
    signatures: [
      [0, Buffer.from([ 0x37, 0x48, 0x03, 0x02, 0x00, 0x00, 0x00, 0x00, 0x58, 0x35, 0x30, 0x39, 0x4B, 0x45, 0x59 ])]
    ],
  },
  {
    extensions: [ 'zst' ],
    description: 'Zstandard compressed file&#91;49&#93;&#91;50&#93;',
    signatures: [
      [0, Buffer.from([ 0x28, 0xB5, 0x2F, 0xFD ])]
    ],
  }
]
