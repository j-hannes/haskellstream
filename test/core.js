/* jshint mocha:true */
var expect = require('chai').expect
var core = require('../lib/core.js')

describe('core', function() {
  describe('succ(8)', function() {
    it('returns 9', function() {
      expect(core.succ(8)).to.be.equal(9)
    })
  })
  describe('min(9,10)', function() {
    it('returns 9', function() {
      expect(core.min(9,10)).to.be.equal(9)
    })
  })
  describe('max(100,101)', function() {
    it('returns 101', function() {
      expect(core.max(100,101)).to.be.equal(101)
    })
  })
  describe('div(92, 10)', function() {
    it('returns 9', function() {
      expect(core.div(92,10)).to.be.equal(9)
    })
  })
  describe('ifThenElse(true,1,2)', function() {
    it('returns 1', function() {
      expect(core.ifThenElse(true,1,2)).to.be.equal(1)
    })
  })
  describe('ifThenElse(false,1,2)', function() {
    it('returns 2', function() {
      expect(core.ifThenElse(false,1,2)).to.be.equal(2)
    })
  })

  // Lists
  describe('append([1,2],[3,4])', function() {
    it('returns [1,2,3,4]', function() {
      var xs = [1,2]
      var ys = [3,4]
      // test
      expect(core.append(xs,ys)).to.be.deep.equal([1,2,3,4])
      // immutability check
      expect(xs).to.be.deep.equal([1,2])
      expect(ys).to.be.deep.equal([3,4])
    })
  })
  describe('cons(1,[2,3])', function() {
    it('returns [1,2,3]', function() {
      var x = 1
      var xs = [2,3]
      // test
      expect(core.cons(1, [2,3])).to.be.deep.equal([1,2,3])
      // immutability check
      expect(x).to.be.equal(1)
      expect(xs).to.be.deep.equal([2,3])
    })
  })

  /*
  describe('', function() {
    it('', function() {
      expect().to.be.equal()
    })
  })
  */
})

