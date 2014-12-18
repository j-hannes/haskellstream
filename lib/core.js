/**
 * Currying makes it possible to partially apply functions, which means calling
 * a function with too few arguments so it returns a new (curried) function that
 * accepts the remaining arguments.
 * 
 * Example:
 * var subtract = curry(function(x, y) {return x-y})
 * subtract(3, 2) // returns 1
 * subtract(3) // returns function(y) {return 3-y}
 * subtract(3)(2) // returns 1
 */
var curry = function(fn) {
  return function() {
    // arguments is an object, so they are copied into an array
    var args = Array.prototype.slice.call(arguments)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function() {
        var moreArgs = Array.prototype.slice.call(arguments)
        return curry(fn).apply(this, args.concat(moreArgs))
      }
    }
  }
}
exports.curry = curry

/**
 * Compose enables function composition alike (f . g) h = f (g h), where the dot
 * is the compose operator.
 */
var compose = curry(function(f, g, h) { return f( g(h) ) })
exports.compose = compose


/**
 * If-then-else is not an expression in JavaScript.
 * This function acts like an if-then-else expression.
 */
var ifThenElse = curry(function(condition, iftrue, iffalse) {
  if (condition) {
    return iftrue
  } else {
    return iffalse
  }
})
exports.ifThenElse = ifThenElse

/**
 * Useful for filtering or just for more expressive code.
 */
var not = function(x) {
  return !x
}
exports.not = not

/**
 * Flip takes a function that takes two parameter and swaps their order.
 * flip :: (a -> b -> c) -> b -> a -> c
 */
var flip = curry(function(f, a, b) {
  return f(b, a)
})
exports.flip = flip
