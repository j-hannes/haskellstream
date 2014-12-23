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
var hs = require('haskellstream')
var curry = hs.core.curry

var pair = curry(function(a, b) {return [a, b]})

var pairWithTwo = pair(2)
console.log(pairWithTwo) // [Function]
console.log(pairWithTwo(3)) // [2,3]
```

Compose:

```JavaScript
var hs = require('haskellstream')
var add = hs.base.add
var compose = hs.core.compose

var doubleIt = function(x) {return x + x}
var addThree = add(3)

var doubleAndAddThree = compose(addThree, doubleIt)
console.log(doubleAndAddThree(5)) // 13
```

Reduce:

```JavaScript
var hs = require('haskellstream')
var add = hs.base.add
var reduce = hs.list.reduce
var range = hs.list.range

var sum = reduce(add, 0)
console.log(sum(range(1,100))) // 5050
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
  * [flip](lib/core.js#L61) :: (a -> b -> c) -> b -> a -> c
* [base](lib/base.js)
  * [succ](lib/base.js#L3) :: Number -> Number
  * [min](lib/base.js#L8) :: Number -> Number -> Number
  * [max](lib/base.js#L17) :: Number -> Number -> Number
  * [add](lib/base.js#L26) :: Number -> Number -> Number
  * [multiply](lib/base.js#L31) :: Number -> Number -> Number
  * [subtract](lib/base.js#L36) :: Number -> Number -> Number
  * [div](lib/base.js#L41) :: Number -> Number -> Number
  * [lessEqual](lib/base.js#L46) :: Number -> Number -> Bool
  * [greaterThan](lib/base.js#L51) :: Number -> Number -> Bool
* [list](lib/list.js)
  * [length](lib/list.js#L8) :: [a] -> Int
  * [empty](lib/list.js#L13) :: [a] -> Bool
  * [head](lib/list.js#L18) :: [a] -> a
  * [last](lib/list.js#L23) :: [a] -> a
  * [init](lib/list.js#L28) :: [a] -> [a]
  * [tail](lib/list.js#L33) :: [a] -> [a]
  * [index](lib/list.js#L38) :: [a] -> Int -> a
  * [cons](lib/list.js#L43) :: a -> [a] -> [a]
  * [reduce](lib/list.js#L48) :: (a -> b -> b) -> b -> [a] -> b
  * [sum](lib/list.js#L57) :: [Number] -> Number
  * [product](lib/list.js#L60) :: [Number] -> Number
  * [append](lib/list.js#L63) :: [a] -> [a] -> [a]
  * [concat](lib/list.js#L68) :: [[a]] -> [a]
  * [range](lib/list.js#L71) :: Int -> Int -> [Int]
  * [filter](lib/list.js#L84) :: [a] -> (a -> Bool) -> [a]
  * [foldl](lib/list.js#L99) :: (a -> b -> a) -> a -> [b] -> a
  * [reverse](lib/list.js#L110) :: [a] -> [a]
  * [take](lib/list.js#L113) :: Int -> [a] -> [a]
  * [drop](lib/list.js#L124) :: Int -> [a] -> [a]
  * [minimum](lib/list.js#L133) :: [Number] -> Number
  * [maximum](lib/list.js#L136) :: [Number] -> Number
* [sort](lib/sort.js)
  * [quicksort](lib/sort.js#L9) :: [a] -> [a]


All functions that take more than one parameter can be curried (applied with too
few parameter to receive a function that takes the remaining parameters).

Command Line Interface / REPL
-----------------------------

Run `./hsci` to have all functions already loaded in node's repl. It supports a
command line history (via npm package repl.history).


Development
===========

ToDo
----

* correct line numbers in source code reference from readme
* implement functors
* add streams

Testing
-------

All exported functions from any module are tested.

I've looked quickly into QuickCheck. Will try to use something like that later
(randomly generated values?). For now very simple tests should be sufficient.
