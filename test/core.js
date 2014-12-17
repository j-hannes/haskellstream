/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var curry = require('../hs').core.curry
var compose = require('../hs').core.compose
var ifThenElse = require('../hs').core.ifThenElse
var not = require('../hs').core.not

describe('core', function() {
  describe('a curried function', function() {
    var fn = function(a, b) {return [a, b]}
    var curriedFn = curry(fn)
    it('can be applied with exact number of arguments', function() {
      expect(curriedFn(1,42)).to.be.deep.equal([1,42])
    })
    it('can be applied with too few arguments', function() {
      var appendToOne = curriedFn(1)
      expect(appendToOne).to.be.a('function')
      expect(appendToOne(42)).to.be.deep.equal([1,42])
    })
    it('doesn\'t change passed in function', function() {
      expect(fn(2,43)).to.be.deep.equal([2,43])
    })
  })
  describe('compose', function() {
    it('can compose two functions together', function() {
      var addFour = function(x) {return x + 4}
      var doubleMe = function(x) {return x + x}
      var doubleAndAddFour = compose(addFour, doubleMe)
      expect(doubleAndAddFour(2)).to.be.equal(8)
    })
  })
  describe('the ifThenElse expression', function() {
    it('returns second argument when first argument is true', function() {
      expect(ifThenElse(true,1,2)).to.be.equal(1)
    })
    it('returns third argument when first argument is false', function() {
      expect(ifThenElse(false,1,2)).to.be.equal(2)
    })
  })
  describe('not', function() {
    it('returns false for true', function() {
      expect(not(true)).to.be.false
    })
    it('returns true for false', function() {
      expect(not(false)).to.be.true
    })
  })
})
