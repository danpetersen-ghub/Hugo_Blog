---
title: JavaScript ES6 Default Parameters
date: 2022-10-24T07:00:00.000+01:00
description: Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
categories:
- JavaScript
tags:
- All
- ES6
- JavaScript

---

# Default Parameters within Functions

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

A nice way to set a default value without having to declare all variables upfront within your function is to use default values!


        // Example: 
        function logger(text = 'No Text Defined') {
            console.log("Incoming text is: " + text);
        }


So if we invoke this function both with and without a param value this is what we see:

        function logger(text = 'No Text Defined') {
            console.log("Incoming text is: " + text);
        }


        logger("sidufghsofhoafoabf");
        // output: "incoming text is: sidufghsofhoafoabf"

        logger();
        // output: Incoming text is: No Text Defined


Pretty Neat! 😎

but... things get even better as we can actually set a function within the params!

        function logger2(
            author = "Dan", 
            text = 'No Text Defined', 
            logline = () => {return `Author: ${author}: Message: ${text}`}  ) {
            console.log( logline() );
        }


As you can see <code> logline </code> is deined within the parameters!

Lets see how this plays out:

        function logger2(author = "Dan", text = 'No Text Defined', logline = () => {return `Author: ${author}: Message: ${text}`}  ) {
            console.log(logline());
        }

        logger2("System","logger2 - log out text from System");
        // output: "Author: System: Message: logger2 - log out text from System"

        logger2(undefined,"logger2 - log out text");
        // output: "Author: Dan: Message: logger2 - log out text"

        logger2(null,"logger2 - log out text");
        // output: "Author: null: Message: logger2 - log out text"

        logger2();
        // output: "Author: Dan: Message: No Text Defined"

So yeah, pretty nice functionality, but not to  be overused as you can see the readability starts to suffer once the params list gets too long!
