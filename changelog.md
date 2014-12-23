0.2.4
-----

* added functions to hsci so they can be used out of the box
* added list.foldl
* added list.reverse
* removed list.n module (appendN can be replaced with concat)
* added motivation text (for wiki later or whatever)
* added list.take
* [dev] use mocha-clean
* added list.drop
* added minimum
* added maximum

0.2.3
-----

* added base.lessEqual
* added base.greaterThan
* added core.flip
* added list.concat
* created list.n module for operator-like use of functions
* added list.n.appendN
* added sort module
* added sort.quicksort
* added repl history to hsci

0.2.2
-----

* create list module
* readded length function
* readded empty function
* readded head function
* readded last function
* readded init function
* readded tail function
* readded index function
* readded cons function
* readded reduce function
* readded sum function
* readded append function
* added range function

0.2.1
-----

* recreate base module
* readded base.succ
* readded base.min
* readded base.max
* readded base.add
* readded base.subtract
* readded base.div

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

