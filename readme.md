# HuMem [![Build Status](https://travis-ci.org/hemanth/node-humem.svg?branch=master)](https://travis-ci.org/hemanth/node-humem)

> Human Readable real time memory stats.

## Install

```sh
$ npm install --save humem
```

## Usage

##### Node.js

```js
var humem = require('humem');

console.log(humem.freemem); // 4 GB
// Open up some app which will eat up some memory.

console.log(humem.freemem); // 2.36 GB
```

## Properties

`humem.totalmem` -> Returns the total amount of system memory in human readable format.

`humem.freemem` -> Returns the amount of free system memory in human readable format.

`humem.usedmem` -> Returns the amount of system memory used in human readbale.format.
## License

MIT © [Hemanth.HM](http://h3manth.com)
