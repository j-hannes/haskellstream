Haskellstream
=============

A simple library to transfer functional programming styles from Haskell into 
JavaScript programs. Starting with functions arounds lists and map and reduce
functions which are easily partially appliable. Aim is to support functional
reactive programming / streams / pipes.

Use
===

Install
-------

    npm install haskellstream

Examples
--------

Curry:

```JavaScript
var hs = require('haskellstream');
var curry = hs.core.curry

var pair = curry(function(a, b) {return [a, b]})

var pairWithTwo = pair(2)
console.log(pairWithTwo) // [Function]
console.log(pairWithTwo(3)) // [2,3]
```

In comparison to Haskell JavaScript is already cluttered up with lots of
parenthesis commas etc. and that imported functions are usually namespaced. This
noise can be reduced by assigning functions from their namespace to their plain
name at the beginning of each module.


Functions covered
-----------------

* [core](lib/core.js)
  * [curry](lib/core.js#L12)
  * [compose](lib/core.js#L32) (b -> c) -> (a -> b) -> a -> c
  * [ifThenElse](lib/core.js#L40) :: Bool -> a -> a
  * [not](lib/core.js#L52) :: Bool -> Bool
* [base](lib/base.js)
  * [succ](lib/base.js#L3) :: Number -> Number
  * [min](lib/base.js#L8) :: Number -> Number -> Number
  * [max](lib/base.js#L17) :: Number -> Number -> Number
  * [add](lib/base.js#L26) :: Number -> Number -> Number
  * [subtract](lib/base.js#L31) :: Number -> Number -> Number
  * [div](lib/base.js#L36) :: Number -> Number -> Number
* [list](lib/list.js)
  * [length](lib/list.js#L3) :: [a] -> Int
  * [empty](lib/list.js#L8) :: [a] -> Bool
  * [head](lib/list.js#L13) :: [a] -> a
  * [last](lib/list.js#L18) :: [a] -> a
  * [init](lib/list.js#L23) :: [a] -> [a]
  * [tail](lib/list.js#L28) :: [a] -> [a]
  * [index](lib/list.js#L33) :: [a] -> Int -> a
  * [cons](lib/list.js#L38) :: a -> [a] -> [a]
  * [reduce](lib/list.js#L44) :: (a -> b -> b) -> b -> [a] -> b
  * [sum](lib/list.js#L53) :: [Int] -> Int
  * [append](lib/list.js#L56) :: [a] -> [a] -> [a]
  * [range](lib/list.js#L61) :: Int -> Int -> [Int]

All functions that take more than one parameter can be curried (applied with too
few parameter to receive a function that takes the remaining parameters).


Development
===========

Command Line Interface / REPL
-----------------------------

Run `./hsci` to have haskellstream loaded in node's repl.

ToDo
----

For now I am trying to create the base (prelude, which should be named base)
module. This will be followed by other modules (list, ...).

Re types I will see what is possible to implement. Functors, Monads etc. will
probably work but not sure how it does with type classes.

Testing
-------

All exported functions from any module are tested.

I've looked quickly into QuickCheck. Will try to use something like that later
(randomly generated values?). For now very simple tests should be sufficient.
