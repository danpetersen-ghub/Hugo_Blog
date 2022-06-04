+++
date = 2022-03-07T09:00:00Z
description = "Functions, what are they good for?"
title = "What the Function!?"
categories = ["All"]
tags = ["All"]
+++

# Functions, what are they good for?

Turns out, quite a lot!

    function nameOfFunction() {
     //do the stuff
    }

Or

    () => {}

These are the two main options available to you. There are times when you might choose one over the other, but so far, sticking to one or the other seems to be working for now.

The biggest difference is clear. Its just less. Less syntax, less declaration, less work and easier to read with arrow functions.

But, I still prefer the written word. Why?

Simply its closer to natural language. Surely, if we choose JavaScript then we are actively choosing a high-level language. Therefore its easier to read and understand simply stating this is a function.

Personally, when you start to add async and await and other such keywords, it makes the code really simple to understand. Therefore easier to maintain, refactor and eventually pass on to another developer.

##### Update:

An additional feature of the arrow function is that if you only have one line then the expression is already returned.

    let int = 1;

    let plus1 = num => num + 1;

    function plus2(num) {
    	return num + 2;
    }

    console.log(plus1(int));
    //result 2

    console.log(plus2(int));
    //result 3

You can see above we have 2 functions, one regular one arrow.

Because we only have one line then the return isn't needed.

Being honest, this is a bit academic. Unless you think about passing a parameter that is a function ie. .map() or .find().
