Haskellstream
=============

Let's write JavaScript programs like we would write Haskell programs. 

Install
-------

    npm install haskellstream

Examples
--------

Import whole library and access functions from modules.

    var hs = require('haskellscript');
    console.log(hs.core.succ(8)); // 9
    console.log(hs.core.min(9,10)); // 9

Or shortcut imports like:

    var c = require('haskellscript').core;
    console.log(c.succ(7)); // 8

Functions covered
-----------------

* [core](lib/core.js)
  * [succ](lib/core.js#L1) :: Number -> Number
  * [min](lib/core.js#L5) :: Number -> Number -> Number
  * [max](lib/core.js#L13) :: Number -> Number -> Number
  * [div](lib/core.js#L21) :: Int -> Int -> Int

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
