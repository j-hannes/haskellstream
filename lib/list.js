var curry = require('./core').curry
var add = require('./base').add

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
