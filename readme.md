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

* core
  * succ :: Number -> Number
  * min :: Number -> Number -> Number
  * max :: Number -> Number -> Number

ToDo
----

For now I am trying to create the core (prelude, which should be named core)
module. This will be followed by other modules (list, ...).

Testing
-------

All exported functions from any module are tested.

I've looked quickly into QuickCheck. Will try to use something like that later
(randomly generated values?). For now very simple tests should be sufficient.
