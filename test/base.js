/* jshint mocha:true */
var expect = require('chai').expect
var hs = require('../hs.js')

describe('hs', function() {
  describe('succ(8)', function() {
    it('returns 9', function() {
      expect(hs.succ(8)).to.be.equal(9)
    })
  })
  describe('min(9,10)', function() {
    it('returns 9', function() {
      expect(hs.min(9,10)).to.be.equal(9)
    })
  })
  describe('max(100,101)', function() {
    it('returns 101', function() {
      expect(hs.max(100,101)).to.be.equal(101)
    })
  })
  describe('div(92, 10)', function() {
    it('returns 9', function() {
      expect(hs.div(92,10)).to.be.equal(9)
    })
  })
  describe('ifThenElse(true,1,2)', function() {
    it('returns 1', function() {
      expect(hs.ifThenElse(true,1,2)).to.be.equal(1)
    })
  })
  describe('ifThenElse(false,1,2)', function() {
    it('returns 2', function() {
      expect(hs.ifThenElse(false,1,2)).to.be.equal(2)
    })
  })

  // Lists
  describe('append([1,2],[3,4])', function() {
    it('returns [1,2,3,4]', function() {
      var xs = [1,2]
      var ys = [3,4]
      expect(hs.append(xs,ys)).to.be.deep.equal([1,2,3,4])
      expect(xs).to.be.deep.equal([1,2])
      expect(ys).to.be.deep.equal([3,4])
    })
  })
  describe('cons(1,[2,3])', function() {
    it('returns [1,2,3]', function() {
      var x = 1
      var xs = [2,3]
      expect(hs.cons(1, [2,3])).to.be.deep.equal([1,2,3])
      expect(x).to.be.equal(1)
      expect(xs).to.be.deep.equal([2,3])
    })
  })

  describe('index([1,2,3,4], 2)', function() {
    it('returns 3', function() {
      var xs = [1,2,3,4]
      expect(hs.index(xs, 2)).to.be.equal(3)
      expect(xs).to.be.deep.equal([1,2,3,4])
    })
  })

  describe('head([1,2,3])', function() {
    it('returns 1', function() {
      var xs = [1,2,3]
      expect(hs.head(xs)).to.be.equal(1)
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })

  describe('tail([1,2,3])', function() {
    it('returns [2,3]', function() {
      var xs = [1,2,3]
      expect(hs.tail(xs)).to.be.deep.equal([2,3])
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })

  describe('last([1,2,3])', function() {
    it('returns 3', function() {
      var xs = [1,2,3]
      expect(hs.last(xs)).to.be.equal(3)
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })

  describe('init([1,2,3])', function() {
    it('returns [1,2]', function() {
      var xs = [1,2,3]
      expect(hs.init(xs)).to.be.deep.equal([1,2])
      expect(xs).to.be.deep.equal([1,2,3])
    })
  })

  describe('length([1,3])', function() {
    it('returns 2', function() {
      var xs = [1,3]
      expect(hs.length(xs)).to.be.equal(2)
      expect(xs).to.be.deep.equal([1,3])
    })
  })

  describe('null([])', function() {
    it('returns true', function() {
      expect(hs.null([])).to.be.true
    })
  })
  describe('null([42])', function() {
    it('returns false', function() {
      expect(hs.null([42])).to.be.false
    })
  })
  describe('add(1,2)', function() {
    it('returns 3', function() {
      expect(hs.add(1,2)).to.be.equal(3)
    })
  })
  describe('reduce(add, 0, [1,2,3,4])', function() {
    it('returns 10', function() {
      var xs = [1,2,3,4]
      expect(hs.reduce(hs.add, 0, xs)).to.be.equal(10)
      expect(xs).to.be.deep.equal([1,2,3,4])
    })
  })
  describe('sum([1,2,3,4,5])', function() {
    it('returns 15', function() {
      var xs = [1,2,3,4,5]
      expect(hs.sum(xs)).to.be.equal(15)
      expect(xs).to.be.deep.equal([1,2,3,4,5])
    })
  })
  describe('subtract(2,3)', function() {
    it('returns 1', function() {
      expect(hs.subtract(2,3)).to.be.equal(1)
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

