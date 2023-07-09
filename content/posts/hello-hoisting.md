+++
date = 2021-06-21T08:00:00.000Z
description = "Hoisting in JavaScript."
title = "Hello Hoisting"
categories = [ "All" ]
tags = [ "All" ]
_template = "post_template"
+++


# What is Hoisting in JavaScript?

Most people think it's just moving the Variables to the top of the page (or scope).

But... it's a bit more than this.

It's the making up of memory for code in the system

If I have the code:

    //CODE
    var a = 10;

Then what is happening is that there are 2 things here:

Declaration of a and the saving of

    // Declaration of Variable
    var a

Then the assignment of a's value (= 10).

This is _because = is an operator_ but all operators **are FUNCTIONS!!!!!**

So the system will store Functions separate from Variables.

**ONLY VARIABLES ARE HOISTED**

So in the above, we have var a being hoisted (kinda moved but actually being stored first in memory)

But the assignment or initializing of the declaration:

    //Assignment of value to variable
    = 10;

is not moved.
