/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var length = hs.list.length
var empty = hs.list.empty
var head = hs.list.head
var last = hs.list.last
var init = hs.list.init
var tail = hs.list.tail

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
  describe('head([1,2,3])', function() {
    it('returns 1', function() {
      var xs = [1,2,3]
      expect(head(xs)).to.be.equal(1)
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })
  describe('last([1,2,3])', function() {
    it('returns 3', function() {
      var xs = [1,2,3]
      expect(last(xs)).to.be.equal(3)
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })
  describe('init([1,2,3])', function() {
    it('returns [1,2]', function() {
      var xs = [1,2,3]
      expect(init(xs)).to.be.deep.equal([1,2])
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })
  describe('tail([1,2,3])', function() {
    it('returns [2,3]', function() {
      var xs = [1,2,3]
      expect(tail(xs)).to.be.deep.equal([2,3])
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })
})

