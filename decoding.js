/*

<Buffer 00 00 53 00 00 00 00 00>
<Buffer 00 00 00 00 00 00 00 00>
<Buffer 00 00 00 00 00 00 00 00>
<Buffer 02 00 0b 00 00 00 00 00> H
<Buffer 00 00 00 00 00 00 00 00>
<Buffer 00 00 08 00 00 00 00 00> e
<Buffer 00 00 0f 00 00 00 00 00> l
<Buffer 00 00 00 00 00 00 00 00> 
<Buffer 00 00 0f 00 00 00 00 00> l
<Buffer 00 00 12 00 00 00 00 00> o
<Buffer 00 00 2c 00 00 00 00 00> w
<Buffer 00 00 1a 00 00 00 00 00>
<Buffer 00 00 12 00 00 00 00 00> o
<Buffer 00 00 15 00 00 00 00 00> r
<Buffer 00 00 0f 00 00 00 00 00> l
<Buffer 00 00 07 00 00 00 00 00> d
<Buffer 00 00 28 00 00 00 00 00>
<Buffer 00 00 53 00 00 00 00 00>
<Buffer 00 00 00 00 00 00 00 00>
<Buffer 00 00 00 00 00 00 00 00>
*/

const scanned0 = [
  0x53, 0x00, 0x00, 0x0b, 0x00, 0x08, 0x0f, 0x00, 0x0f, 0x12, 0x2c, 0x1a, 0x12,
  0x15, 0x0f, 0x07, 0x28, 0x53, 0x00, 0x00,
];

const scanned = [
  0x08, 0x0f, 0x00, 0x0f, 0x12, 0x2c, 0x1a, 0x12, 0x15, 0x0f, 0x07,
];

import { Buffer } from 'node:buffer';

const buf = Buffer.from([0x00, 0x00, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00]);
console.log(buf, buf.length, buf.byteLength, buf.BYTES_PER_ELEMENT);

console.log('ello world'.split('').map(c => c.charCodeAt(0)));
console.log(scanned.map(i => String.fromCharCode(i + 93)));
