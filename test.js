'use strict';
var assert = require('assert');
var proxyquire =  require('proxyquire')
var osStub = {
    "totalmem": function() { return 2931429376; },
    "freemem" : function() { return 474046464;  }
};

var humem = proxyquire("./index",{'os':osStub});

it("should return human readable mem info", function () {
	assert.equal(humem.totalmem,"2.93 GB");
	assert.equal(humem.freemem,"474.05 MB");
});
