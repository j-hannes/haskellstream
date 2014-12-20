/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var appendN = hs.list.n.appendN

describe('list.n module', function() {
  describe('appendN([1,2],[3,4],[5,6])', function() {
    it('returns [1,2,3,4,5,6]', function() {
      var xs = [1,2]
      var ys = [3,4]
      var zs = [5,6]
      expect(appendN(xs,ys,zs)).to.be.deep.equal([1,2,3,4,5,6])
      expect(xs).to.be.deep.equal([1,2])
      expect(ys).to.be.deep.equal([3,4])
      expect(zs).to.be.deep.equal([5,6])
    })
  })
})

