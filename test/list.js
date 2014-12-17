/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var length = hs.list.length

describe('list module', function() {
  describe('length([1,3])', function() {
    it('returns 2', function() {
      var xs = [1,3]
      expect(length(xs)).to.be.equal(2)
      expect(xs).to.be.deep.equal([1,3])
    })
  })
})

