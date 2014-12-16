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

exports.append = function(xs, ys) {
  return xs.concat(ys)
}

exports.cons = function(x, xs) {
  return [x].concat(xs)
}

exports.index = function(xs, i) {
  return xs[i]
}

exports.head = function(xs) {
  return xs[0]
}

exports.tail = function(xs) {
  return xs.slice(1)
}

exports.last = function(xs) {
  return xs[xs.length - 1]
}

exports.init = function(xs) {
  return xs.slice(0, xs.length - 1)
}

exports.length = function(xs) {
  return xs.length
}


