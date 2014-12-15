exports.succ = function(x) {
  return x + 1;
};

exports.min = function(x,y) {
  if (x <= y) {
    return x;
  } else {
    return y;
  }
};

exports.max = function(x,y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
