Motivation
----------

There are currently plenty of projects / languages out there for people who love
the pure functional approach of Haskell and want to transfer that style into
JavaScript programs.

First of all there are some HS to JS compiler out there (UHC, GHCJS, Haste, ...)
or langages that are a subset or similar to Haskell (fay, roy, elm, ...) that
compile to JavaScript. But a) these approaches are still not the same as writing
Haskell programs and they add more requirements to the build process. But most
of all they remove the integrity and transparency of our written programs.
Suddenly we are not writing code any more but we are writing in a DSL and many
things happen under the hood (magically). This removes quite a bit of the
freedom and power to quickly write front end code for web applications.

On another note, there are many many more JavaScript developers than Haskell
developers out there, so the chance to find collaborators for our HS->JS written
application are rather small.

We don't need to replace JavaScript completely. It isn't that bad as a language.
Even after having programmed in Haskell, Python and Ruby I still find JavaScript
attractive. You can write small concise and especially modular programs with it.
So instead of replacing JavaScript we could just try to introduce concepts that
are working really well in functional programming languages in JavaScript, and
this is what I try to achieve with this library.

There are currently a few projects out there that are trying a similar approach.
First of all there is the popular underscore library. But underscore.js prevents
you from using function composition and currying in your application but is
rather data-centered (see also the talk from Bryan Londsdorf "Hey Underscore,
you're doing it wrong"). Then there is the really well documented ramda.js
library. But this library even tho very nice designed, differs quite a bit of
function use and naming from what we know from Haskell (take, drop etc.).

So there we are with another library that you can integrate in you JavaScript
programs. It is neither a new language now a framework, it is just JavaScript
with the flavor of Haskell. You can use only one function of it (if you only
need map, reduce, compose or whatever) or make use of the whole library and
write programs that are made of functions that are modular, easily composable,
concise, referential transparent, easily testable and lazy.

