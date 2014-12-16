var curry = require('ramda').curry

// language constructs

var ifThenElse = curry(function(condition, iftrue, iffalse) {
  if (condition) {
    return iftrue
  } else {
    return iffalse
  }
})
exports.ifThenElse = ifThenElse

// elementary functions

var succ = function(x) {
  return x + 1
};
exports.succ = succ

var min = curry(function(x, y) {
  if (x <= y) {
    return x
  } else {
    return y
  }
})
exports.min = min

var max = curry(function(x, y) {
  if (x > y) {
    return x
  } else {
    return y
  }
})
exports.max = max

var add = function(x, y) {
  return x + y
}
exports.add = add

var subtract = function(x, y) {
  return y - x
}
exports.subtract = subtract

var div = curry(function(x, y) {
  return Math.floor(x / y)
})
exports.div = div

// list functions

var empty = function(xs) {
  return xs.length === 0
}
exports.empty = empty

var index = function(xs, i) {
  return xs[i]
}
exports.index = index

var length = function(xs) {
  return xs.length
}
exports.length = length

var head = function(xs) {
  return xs[0]
}
exports.head = head

var tail = function(xs) {
  return xs.slice(1)
}
exports.tail = tail

var last = function(xs) {
  return xs[xs.length - 1]
}
exports.last = last

var init = function(xs) {
  return xs.slice(0, xs.length - 1)
}
exports.init = init

var reduce = curry(function(fn, acc, xs) {
  if (empty(xs)) {
    return acc
  } else {
    return fn(head(xs), reduce(fn, acc, tail(xs)))
  }
})
exports.reduce = reduce

var cons = curry(function(x, xs) {
  return [x].concat(xs)
})
exports.cons = cons

var append = function(a, b) {
  return reduce(cons, b, a)
}
exports.append = append

var sum = reduce(add, 0)
exports.sum = sum

