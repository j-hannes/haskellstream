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
  describe('div(92, 10)', function() {
    it('returns 9', function() {
      expect(core.div(92,10)).to.be.equal(9);
    });
  });
  describe('ifThenElse(true,1,2)', function() {
    it('returns 1', function() {
      expect(core.ifThenElse(true,1,2)).to.be.equal(1);
    });
  });
  describe('ifThenElse(false,1,2)', function() {
    it('returns 2', function() {
      expect(core.ifThenElse(false,1,2)).to.be.equal(2);
    });
  });
  /*
  describe('', function() {
    it('', function() {
      expect().to.be.equal();
    });
  });
  */
});

