Haskellstream
=============

Let's write JavaScript programs like we would write Haskell programs.

Use
===

Install
-------

    npm install haskellstream

Examples
--------

Import whole library and access functions from modules.

```JavaScript
var hs = require('haskellstream');
console.log(hs.succ(8)); // 9
console.log(hs.min(23, 42)); // 23
console.log(hs.reduce(add, 0, [1,2,3,4])); // 10
```

All functions are higher order functions, so they can be partially applied:

```JavaScript
var sum = hs.reduce(add, 0);
console.log(sum([1,2,3,4])); // 10
```

Functions covered
-----------------

* [base](lib/base.js)
  * language constructs
    * [ifThenElse](lib/base.js#L5) :: Bool -> * -> *
    * [succ](lib/base.js#L16) :: Number -> Number
    * [min](lib/base.js#L21) :: Number -> Number -> Number
    * [max](lib/base.js#L30) :: Number -> Number -> Number
    * [add](lib/base.js#L39) :: Number -> Number -> Number
    * [subtract](lib/base.js#L44) :: Number -> Number -> Number
    * [div](lib/base.js#L49) :: Int -> Int -> Int
    * [empty](lib/base.js#L56) :: [a] -> Bool
    * [index](lib/base.js#L61) :: [a] -> Int -> a
    * [length](lib/base.js#L66) :: [a] -> Int
    * [head](lib/base.js#L71) :: [a] -> a
    * [tail](lib/base.js#L76) :: [a] -> [a]
    * [last](lib/base.js#L81) :: [a] -> a
    * [init](lib/base.js#L86) :: [a] -> [a]
    * [reduce](lib/base.js#L91) :: (a -> b -> a) -> a -> [b] -> a
    * [cons](lib/base.js#L100) :: a -> [a] -> [a]
  * higher order
    * [append](lib/base.js#L107) :: [a] -> [a] -> [a]
    * [sum](lib/base.js#L112) :: [Number] -> Number

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
