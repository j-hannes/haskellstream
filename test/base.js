/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var succ = hs.base.succ
var min = hs.base.min
var max = hs.base.max
var div = hs.base.div
var add = hs.base.add
var subtract = hs.base.subtract

describe('base', function() {
  describe('succ(8)', function() {
    it('returns 9', function() {
      expect(succ(8)).to.be.equal(9)
    })
  })
  describe('min(9,10)', function() {
    it('returns 9', function() {
      expect(min(9,10)).to.be.equal(9)
    })
    it('can be partially applied', function() {
      var atMostFive = min(5)
      expect(atMostFive).to.be.a('function')
      expect(atMostFive(10)).to.be.equal(5)
    })
  })
  describe('max(100,101)', function() {
    it('returns 101', function() {
      expect(max(100,101)).to.be.equal(101)
    })
  })
  describe('div(92, 10)', function() {
    it('returns 9', function() {
      expect(div(92,10)).to.be.equal(9)
    })
  })
  describe('add(1,2)', function() {
    it('returns 3', function() {
      expect(add(1,2)).to.be.equal(3)
    })
    it('can be partially applied', function() {
      var addOne = add(1)
      expect(addOne).to.be.a('function')
      expect(addOne(2)).to.be.equal(3)
    })
  })
  describe('subtract(2,3)', function() {
    it('returns 1', function() {
      expect(subtract(2,3)).to.be.equal(1)
    })
    it('can be partially applied', function() {
      var subtractTwo = subtract(2)
      expect(subtractTwo).to.be.a('function')
      expect(subtractTwo(3)).to.be.equal(1)
    })
  })
})