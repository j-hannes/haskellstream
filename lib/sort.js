var lessEqual = require('./base').lessEqual
var greaterThan = require('./base').greaterThan
var length = require('./list').length
var head = require('./list').head
var tail = require('./list').tail
var filter = require('./list').filter
var concat = require('./list').concat

var quicksort = function(list) {
  if (length(list) < 2) {
    return list
  } else {
    var pivot = head(list)
    var putBefore = filter(lessEqual(pivot), tail(list))
    var putAfter = filter(greaterThan(pivot), tail(list))
    return concat([quicksort(putBefore), [pivot], quicksort(putAfter)])
  }
}
exports.quicksort = quicksort

