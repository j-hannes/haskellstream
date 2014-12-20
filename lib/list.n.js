var concat = require('./list').concat

var appendN = function() {
  var args = Array.prototype.slice.call(arguments)
  return concat(args)
}
exports.appendN = appendN

