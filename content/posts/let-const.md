+++
categories = []
date = 2022-08-25T08:00:00Z
description = "In ES6 these replace the Var keyword. "
tags = []
title = "LET and CONST"

+++
## Let & Const

In ES6 these replace the Var keyword. This is because they have an added feature block scoping. 

A block is defined by the {} in JavaScript. 

    //This is block 1
    {
    //This is block 2
    }
    {
    //This is block 3
    	{
        	//this is block 4
        }
    }

You will see that for blocks 2 & 3 they are on the same level.  they can have the same variable via let. 

But, if you use a variable in, say block 3, the JS engine will look in block 3 & block 1 (its parents) for the variable before saying undefined. 

**This means you should use LET in place of var as much as possible.** 

### Const 

const is also block scoped. But its Binding is immutable! not the actual value!

    const name = "Dan";
    name = "Daniel"; //this will throw an error AS THE BINDING is being changed. 
    
    const person = { name: "Dan", age : 123}
    person.name = "Daniel" 
    //This is fine as the binding between person and the memory is maintined!
    