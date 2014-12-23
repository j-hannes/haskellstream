var curry = require('./core').curry
var flip = require('./core').flip
var add = require('./base').add
var max = require('./base').max
var min = require('./base').min

var length = function(xs) {
  return xs.length
}
exports.length = length

var empty = function(xs) {
  return xs.length === 0
}
exports.empty = empty

var head = function(xs) {
  return xs[0]
}
exports.head = head

var last = function(xs) {
  return xs[xs.length - 1]
}
exports.last = last

var init = function(xs) {
  return xs.slice(0, xs.length - 1)
}
exports.init = init

var tail = function(xs) {
  return xs.slice(1)
}
exports.tail = tail

var index = curry(function(xs, i) {
  return xs[i]
})
exports.index = index

var cons = curry(function(x, xs) {
  return [x].concat(xs)
})
exports.cons = cons

var reduce = curry(function(fn, acc, xs) {
  if (empty(xs)) {
    return acc
  } else {
    return fn(head(xs), reduce(fn, acc, tail(xs)))
  }
})
exports.reduce = reduce

var sum = reduce(add, 0)
exports.sum = sum

var append = curry(function(a, b) {
  return reduce(cons, b, a)
})
exports.append = append

var concat = reduce(append, [])
exports.concat = concat

var range = curry(function(from, to) {
  from = Math.floor(from)
  to = Math.floor(to)
  if (from < to) {
    return cons(from, range(from + 1, to))
  }
  if (from > to) {
    return cons(from, range(from - 1, to))
  }
  return [from]
})
exports.range = range

var filter = curry(function(criteria, list) {
  if (empty(list)) {
    return list
  } else {
    var x = head(list)
    var xs = tail(list)
    if (criteria(x)) {
      return cons(x, filter(criteria, xs))
    } else {
      return filter(criteria, xs)
    }
  }
})
exports.filter = filter

var foldl = curry(function(fn, acc, list) {
  if (empty(list)) {
    return acc
  } else {
    var x = head(list)
    var xs = tail(list)
    return foldl(fn, fn(acc, x), xs)
  }
})
exports.foldl = foldl

var reverse = foldl(flip(cons), [])
exports.reverse = reverse

var take = curry(function(n, list) {
  if (n <= 0 || empty(list)) {
    return []
  } else {
    var x = head(list)
    var xs = tail(list)
    return cons(x, take(n-1, xs))
  }
})
exports.take = take

var drop = curry(function(n, list) {
  if (n <= 0 || empty(list)) {
    return list
  } else {
    return drop(n-1, tail(list))
  }
})
exports.drop = drop

var maximum = reduce(max, -Infinity)
exports.maximum = maximum

var minimum = reduce(min, Infinity)
exports.minimum = minimum
