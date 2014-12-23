/* jshint mocha:true */
var expect = require('chai').expect

// import functions
var hs = require('../hs')
var add = hs.base.add
var greaterThan = hs.base.greaterThan

var length = hs.list.length
var empty = hs.list.empty
var head = hs.list.head
var last = hs.list.last
var init = hs.list.init
var tail = hs.list.tail
var index = hs.list.index
var cons = hs.list.cons
var reduce = hs.list.reduce
var sum = hs.list.sum
var append = hs.list.append
var range = hs.list.range
var filter = hs.list.filter
var concat = hs.list.concat
var reverse = hs.list.reverse
var foldl = hs.list.foldl
var take = hs.list.take
var drop = hs.list.drop
var maximum = hs.list.maximum
var minimum = hs.list.minimum

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
  describe('index([1,2,3,4], 2)', function() {
    var xs = [1,2,3,4]
    it('returns 3', function() {
      expect(index(xs, 2)).to.be.equal(3)
      expect(xs).to.be.deep.equal([1,2,3,4])
    })
    it('is curryable', function() {
      var fromList = index(xs)
      expect(fromList).to.be.a('function')
      expect(fromList(2)).to.be.equal(3)
    })
  })
  describe('cons(1,[2,3])', function() {
    it('returns [1,2,3]', function() {
      var x = 1
      var xs = [2,3]
      expect(cons(1, [2,3])).to.be.deep.equal([1,2,3])
      expect(x).to.be.equal(1)
      expect(xs).to.be.deep.equal([2,3])
    })
    it('is curryable', function() {
      var prependOne = cons(1)
      expect(prependOne).to.be.a('function')
      expect(prependOne([2,3])).to.be.deep.equal([1,2,3])
    })
  })
  describe('reduce(add, 0, [1,2,3,4])', function() {
    it('returns 10', function() {
      var xs = [1,2,3,4]
      expect(reduce(add, 0, xs)).to.be.equal(10)
      expect(xs).to.be.deep.equal([1,2,3,4])
    })
    it('is curryable', function() {
      var sum = reduce(add, 0)
      expect(sum).to.be.a('function')
      expect(sum([1,2,3,4])).to.be.equal(10)
    })
  })
  describe('sum([1,2,3,4,5])', function() {
    it('returns 15', function() {
      var xs = [1,2,3,4,5]
      expect(sum(xs)).to.be.equal(15)
      expect(xs).to.be.deep.equal([1,2,3,4,5])
    })
  })
  describe('append([1,2],[3,4])', function() {
    it('returns [1,2,3,4]', function() {
      var xs = [1,2]
      var ys = [3,4]
      expect(append(xs,ys)).to.be.deep.equal([1,2,3,4])
      expect(xs).to.be.deep.equal([1,2])
      expect(ys).to.be.deep.equal([3,4])
    })
    it('is curryable', function() {
      var appendToMyList = append([1,2])
      expect(appendToMyList).to.be.a('function')
      expect(appendToMyList([3,4])).to.be.deep.equal([1,2,3,4])
    })
  })
  describe('concat([[1,2],[3,4])', function() {
    it('returns [1,2,3,4]', function() {
      var xs = [1,2]
      var ys = [3,4]
      expect(concat([xs,ys])).to.be.deep.equal([1,2,3,4])
      expect(xs).to.be.deep.equal([1,2])
      expect(ys).to.be.deep.equal([3,4])
    })
  })
  describe('range(1,5)', function() {
    it('returns [1,2,3,4,5]', function() {
      expect(range(1,5)).to.be.deep.equal([1,2,3,4,5])
    })
    it('is curryable', function() {
      var rangeFromOne = range(1)
      expect(rangeFromOne).to.be.a('function')
      expect(rangeFromOne(5)).to.be.deep.equal([1,2,3,4,5])
    })
  })
  describe('range(5,1)', function() {
    it('returns [5,4,3,2,1]', function() {
      expect(range(5,1)).to.be.deep.equal([5,4,3,2,1])
    })
  })
  describe('range(1,2.5)', function() {
    it('returns [1,2]', function() {
      expect(range(1,2)).to.be.deep.equal([1,2])
    })
  })
  describe('filter(greaterThan(2), [1,2,3,4])', function() {
    it('returns [3,4]', function() {
      var xs = [1,2,3,4]
      expect(filter(greaterThan(2), xs)).to.be.deep.equal([3,4])
      expect(xs).to.be.deep.equal([1,2,3,4])
    })
  })
  describe('reverse([1,2,3,4,5])', function() {
    it('returns [5,4,3,2,1]', function() {
      var xs = [1,2,3,4,5]
      expect(reverse(xs)).to.be.deep.equal([5,4,3,2,1])
      expect(xs).to.be.deep.equal([1,2,3,4,5])
    })
  })
  describe('foldl(add, 0, [1,2,3])', function() {
    it('returns 6', function() {
      var xs = [1,2,3]
      expect(foldl(add, 0, xs)).to.be.equal(6)
      expect(xs).to.be.deep.equal([1,2,3])
    })
    it('is curryable', function() {
      var sum = foldl(add, 0)
      expect(sum).to.be.a('function')
      expect(sum([1,2,3])).to.be.equal(6)
    })
  })
  describe('take(3, [5,4,3,2,1])', function() {
    var xs = [5,4,3,2,1]
    it('returns [5,4,3]', function() {
      expect(take(3, xs)).to.be.deep.equal([5,4,3])
      expect(xs).to.be.deep.equal([5,4,3,2,1])
    })
    it('is curryable', function() {
      var firstThree = take(3)
      expect(firstThree).to.be.a('function')
      expect(firstThree(xs)).to.be.deep.equal([5,4,3])
    })
  })
  describe('take(5, [1,2])', function() {
    it('returns [1,2]', function() {
      expect(take(5, [1,2])).to.be.deep.equal([1,2])
    })
  })
  describe('drop(3, [8,4,2,1,5,6])', function() {
    var xs = [8,4,2,1,5,6]
    it('returns [1,5,6]', function() {
      expect(drop(3, xs)).to.be.deep.equal([1,5,6])
    })
    it('is curryable', function() {
      var dropFirstTwo = drop(2)
      expect(dropFirstTwo).to.be.a('function')
      expect(dropFirstTwo(xs)).to.be.deep.equal([2,1,5,6])
    })
  })
  describe('drop(100, [1,2,3,4])', function() {
    it('returns []', function() {
      expect(drop(100, [1,2,3,4])).to.be.deep.equal([])
    })
  })
  describe('maximum([1,9,2,3,4])', function() {
    it('returns 0', function() {
      var xs = [1,9,2,3,4]
      expect(maximum(xs)).to.be.equal(9)
      expect(xs).to.be.deep.equal([1,9,2,3,4])
    })
  })
  describe('minimum([8,4,2,1,5,6])', function() {
    it('returns 1', function() {
      var xs = [8,4,2,1,5,6]
      expect(minimum(xs)).to.be.equal(1)
      expect(xs).to.be.deep.equal([8,4,2,1,5,6])
    })
  })
})

