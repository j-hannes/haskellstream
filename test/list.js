/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var length = hs.list.length
var empty = hs.list.empty

describe('list module', function() {
  describe('length([1,3])', function() {
    it('returns 2', function() {
      var xs = [1,3]
      expect(length(xs)).to.be.equal(2)
      expect(xs).to.be.deep.equal([1,3])
    })
  })
  describe('empty([])', function() {
    it('returns true', function() {
      expect(empty([])).to.be.true
    })
  })
  describe('empty([42])', function() {
    it('returns false', function() {
      expect(empty([42])).to.be.false
    })
  })
})

