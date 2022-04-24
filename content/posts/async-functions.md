+++
date = 2022-04-21T23:00:00Z
description = ""
title = "Async Functions"

+++
# Async,  Await & Promises

So, this concept I've actually been using for a while but unknowingly. An example of this is the .fetch() method and .then(). 

It makes API use very, very easy! 

Example:

    fetch('https://nodestarter-prod.herokuapp.com/api/all/data',{
      headers : { 
        'method': 'GET',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
      .then((res) => res.json())
      .then((data) => console.log(data) );

But, let's take a look at how we can actually do async functions because Ive definitely been a perpetrator of callback hell!!!

First, we need to understand Promises...

Example code we will walkthrough:

    // doWork is a reg func that takes 2 parameters (resolve) and (reject)
    //after a delay of 5 seconds, resolve is called with the value "done"
    const doWork = (res, rej) => {
      setTimeout(() => {
        res("TIMEOUT DONE");
      }, 5000);
    };
    
    // someText is the promise for the doWork function
    // we await the response of the doWork function
    let someText = new Promise(doWork);
    
    //once the promise is resolved, we log the response
    someText.then((val) => {
      console.log(`Log 1: ${val}`); // Log 1: Done
    });

So, simply we have a function with a 5-second timer and the 'res' parameter we set to "TIMEOUT DONE".

Then we have a variable that is a promise object that waits for the doWork function to finish. 

We then add a function to the result (console.log), but of course we can do whatever we want here. 

So that's what is happening, but not why!

This is where I must defer you to this resource: [https://www.udemy.com/course/understand-javascript/](https://www.udemy.com/course/understand-javascript/ "https://www.udemy.com/course/understand-javascript/")

This is the best place to learn web dev stuff as it fits nicely what a mentor taught me:

> _"nothing is ever complicated"_

Anyhow back to the topic:

In the course video, it's described as (please ignore the beginner oversimplification and if misunderstandings). 

What kind of happens

1. an async process has begun 
2. additional functions are then added as an array once the process stops
3. once the process (i.e data is returned), all the functions in the array are triggered

This way JS is still 'single-threaded' & 'non-blocking'. 

remember async await is just 'sugar' for the promise method, it is literally the same thing.

basic async example:

    //async functions
    
    async function funcName() {
      console.log("funcName:" + funcName.name);
      await funcName2();
    }
    
    function funcName2() {
      setTimeout(() => {
        console.log("funcName2");
      }, 5000);
    }
    
    funcName();

Now you can start to see how we can swap out the time out function for any other request i.e. .fetch() or db.query() 

So, a better fetch example using async is: 

     //async functions
    async function funcName() {
      await funcName2().then((data) => console.log(data));
    }
    
    function funcName2() {
      return data = fetch("https://nodestarter-prod.herokuapp.com/api/all/data", {
        headers: {
          method: "GET",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());
    }
    
    funcName();

In the browser, you could easily trigger the funcName(); on click event listener.

The approach above clearly breaks out the 3 operations

1. Triggering the process
2. Getting the data 
3. What do you want to do with the data once you have it

F|inally, its so easy to read and understand what is actually the intended process here, rather than getting confused by syntax.