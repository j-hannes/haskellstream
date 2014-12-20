/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var quicksort = hs.sort.quicksort

describe('sort .', function() {
  describe('quicksort([6,2,42,23,7,1,6])', function() {
    var unsortedList = [6,2,42,23,7,1,6]
    it('returns [1,2,6,6,7,23,42]', function() {
      expect(quicksort(unsortedList)).to.be.deep.equal([1,2,6,6,7,23,42])
    })
    it('doesn\'t change the unsorted list', function() {
      expect(unsortedList).to.be.deep.equal([6,2,42,23,7,1,6])
    })
  })
})
