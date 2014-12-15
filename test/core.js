/* jshint mocha:true */
var expect = require('chai').expect;
var core = require('../lib/core.js');

describe('core', function() {
  describe('succ', function() {
    it('returns 9 for 8', function() {
      expect(core.succ(8)).to.be.equal(9);
    });
  });
});

