/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var succ = hs.base.succ
var min = hs.base.min
var max = hs.base.max
var add = hs.base.add
var multiply = hs.base.multiply
var subtract = hs.base.subtract
var div = hs.base.div
var equal = hs.base.equal
var lessEqual = hs.base.lessEqual
var lessThan = hs.base.lessThan
var greaterEqual = hs.base.greaterEqual
var greaterThan = hs.base.greaterThan

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
  describe('multiply(12,12)', function() {
    it('returns 144', function() {
      expect(multiply(12,12)).to.be.equal(144)
    })
    it('can be partially applied', function() {
      var timesThree = multiply(3)
      expect(timesThree).to.be.a('function')
      expect(timesThree(12)).to.be.equal(36)
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
  describe('div(92, 10)', function() {
    it('returns 9', function() {
      expect(div(92,10)).to.be.equal(9)
    })
  })
  describe('equal(2, 2)', function() {
    it('returns true', function() {
      expect(equal(2,2)).to.be.true
    })
  })
  describe('lessThan(2, 1)', function() {
    it('returns true', function() {
      expect(lessThan(2,1)).to.be.true
    })
  })
  describe('lessEqual(4,10)', function() {
    it('returns false', function() {
      expect(lessEqual(4,10)).to.be.false
    })
  })
  describe('lessEqual(2,2)', function() {
    it('returns true', function() {
      expect(lessEqual(2,2)).to.be.true
    })
  })
  describe('lessEqual(3, 1)', function() {
    it('returns true', function() {
      expect(lessEqual(3,1)).to.be.true
    })
  })
  describe('greaterEqual(2, 3)', function() {
    it('returns true', function() {
      expect(greaterEqual(2,3)).to.be.true
    })
  })
  describe('greaterThan(4, 10)', function() {
    it('returns true', function() {
      expect(greaterThan(4,10)).to.be.true
    })
  })
  describe('greaterThan(2, 2)', function() {
    it('returns false', function() {
      expect(greaterThan(2,2)).to.be.false
    })
  })
  describe('greaterThan(3, 1)', function() {
    it('returns false', function() {
      expect(greaterThan(3,1)).to.be.false
    })
  })

})
