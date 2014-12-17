var curry = require('./core').curry

var length = function(xs) {
  return xs.length
}
exports.length = length

var empty = function(xs) {
  return xs.length === 0
}
exports.empty = empty

