'use strict';
var pb = require('pretty-bytes');
var os = require('os');
var humem = {};

Object.defineProperties(humem, {
  "totalmem": {
    writebale:false,
    get: function() { return pb(os.totalmem());}
  }, 
  "freemem": {
    writebale:false,
    get: function() { return pb(os.freemem());}
  },
  "usedmem": {
    writebale:false,
    get: function() { return pb(os.totalmem() - os.freemem());}
  }
});

module.exports = humem;
