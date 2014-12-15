exports.succ = function(x) {
  return x + 1
};

exports.min = function(x, y) {
  if (x <= y) {
    return x
  } else {
    return y
  }
};

exports.max = function(x, y) {
  if (x > y) {
    return x
  } else {
    return y
  }
}

exports.div = function(x, y) {
  return Math.floor(x / y)
}

exports.ifThenElse = function(condition, iftrue, iffalse) {
  if (condition) {
    return iftrue
  } else {
    return iffalse
  }
}

exports.append = function(list1, list2) {
  return list1.concat(list2)
}

