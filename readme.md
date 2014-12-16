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
console.log(hs.core.succ(8)); // 9
console.log(hs.core.min(9,10)); // 9
```

Or shortcut imports like:

```JavaScript
var c = require('haskellstream').core;
console.log(c.succ(7)); // 8
```

Functions covered
-----------------

* [core](lib/core.js)
  * [succ](lib/core.js#L1) :: Number -> Number
  * [min](lib/core.js#L5) :: Number -> Number -> Number
  * [max](lib/core.js#L13) :: Number -> Number -> Number
  * [div](lib/core.js#L21) :: Int -> Int -> Int
  * [append](lib/core.js#L33) :: [a] -> [a] -> [a]
  * [cons](lib/core.js#L37) :: a -> [a] -> [a]
  * [index](lib/core.js#L41) :: [a] -> Int -> a
  * [head](lib/core.js#L45) :: [a] -> a
  * [tail](lib/core.js#L49) :: [a] -> [a]
  * [last](lib/core.js#L53) :: [a] -> a
  * [init](lib/core.js#L57) :: [a] -> [a]
  * [length](lib/core.js#L61) :: [a] -> Int
  * [null](lib/core.js#L65) :: [a] -> Bool

Development
===========

Command Line Interface / REPL
-----------------------------

Very simple! But helpful. ;) Run `./hsci` to have hs loaded in node's repl.

ToDo
----

For now I am trying to create the core (prelude, which should be named core)
module. This will be followed by other modules (list, ...).

Re types I will see what is possible to implement. Functors, Monads etc. will
probably work but not sure how it does with type classes.

Testing
-------

All exported functions from any module are tested.

I've looked quickly into QuickCheck. Will try to use something like that later
(randomly generated values?). For now very simple tests should be sufficient.
