var curry = require('./core').curry

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

