var curry = require('./core').curry

var succ = function(x) {
  return x + 1
}
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

var add = curry(function(x, y) {
  return x + y
})
exports.add = add

var subtract = curry(function(x, y) {
  return y - x
})
exports.subtract = subtract

var div = curry(function(x, y) {
  return Math.floor(x / y)
})
exports.div = div

var lessEqual = curry(function(x, y) {
  return x <= y
})
exports.lessEqual = lessEqual

