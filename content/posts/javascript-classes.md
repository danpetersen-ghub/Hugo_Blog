+++
categories = []
date = 2022-07-13T23:00:00Z
description = "Classes are a template for creating objects. "
tags = []
title = "JavaScript Classes"

+++
# Classes in JavaScript

_Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics._

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes")

So a way to think about it; you have an app and it has users. 

So... you need data on a User. 

    const User = {
    	name: 'John',
        company: 'ABC',
        country: 'DE',
        etc...
    }

But obviously, you'll have more than one user. so how can you 'template' this so that you can create users on the fly? 

    function UserObj(name, company, country ) {
        this.name = name;
        this.company = company; 
        this.country = country;
        this.logName = function(){
            console.log(name);
        }
    }
    
    let jane = new UserObj('Jane', 'Google', 'UK');
    let john = new UserObj('John', 'abc', 'DE');
    
    jane.logName(); //jane
    john.logName(); //john

The above defines all the methods and data structure to make it nice and consistent across objects of a similar type. 

In ES6 we have some sweet syntactic sugar for this:

    class UserObj {
        constructor(name, company, country){
            this.name = name;
            this.company = company; 
            this.country = country;
        }
        // Adding a method to the constructor
        logName(){
            console.log(this.name);
        }
    
    }
    
    let jane = new UserObj('Jane', 'Google', 'UK');
    let john = new UserObj('John', 'abc', 'DE');
    
    jane.logName();
    john.logName();

Notice class has no variable declared. The method is split out from the data.