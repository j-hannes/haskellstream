0.2.0
-----

* remove base module (and all functions)
* create core module that contains `curry`, `compose`, `ifThenElse` and `not`
* functions now have module namespace, e.g. `hs.core.compose`, also see readme
* remove dependency from ramda library

0.1.0
-----

* renamed module "core" to "base"
* reduced module namespace (access via hs.core.fn is now simply hs.fn)
* use the ramda library to borrow the curry function
* reorder and group functions in base
* refactor functions "append" and "sum" alike whyfp
* rename list function "null" to "empty"
* declare functions locally to reduce namespace clutter when use internally
* all functions can now be partially applied (curried)

0.0.3
-----

* added core.length
* added core.null
* added core.add
* added core.subtract
* added core.reduce
* added core.sum

0.0.2
-----

* added core.append
* added core.cons
* added core.index
* added core.head
* added core.tail
* added core.last
* added core.init

0.0.1
-----

* added core module
* added core.succ
* added core.min
* added core.max
* added core.div
* added a simple command line interface (repl)

