/* jshint mocha:true */
var expect = require('chai').expect;
var core = require('../lib/core.js');

describe('core', function() {
  describe('succ(8)', function() {
    it('returns 9', function() {
      expect(core.succ(8)).to.be.equal(9);
    });
  });
  describe('min(9,10)', function() {
    it('returns 9', function() {
      expect(core.min(9,10)).to.be.equal(9);
    });
  });
  describe('max(100,101)', function() {
    it('returns 101', function() {
      expect(core.max(100,101)).to.be.equal(101);
    });
  });
});

