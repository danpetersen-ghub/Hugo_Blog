+++
date = 2022-03-09T09:00:00Z
description = ".fetch().then() in NodeJS"
draft = true
title = "JS: Fetch Method"

+++
# Here is a snippet I use all the time..

I always forget the syntax so this is a good point to copy and reuse across the apps I create! 

     let queryString = 'www.google.com'
     //Send the request
     fetch(queryString, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Access-Control-Allow-Origin":"*", 
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type"
            
        }
    }
    )
    // force the result into JSON
    .then(res => res.json())
    // do some stuff with the data
    .then(json => console.log(json)) 
    //Catch the Error
    .catch(err => console.log(err));

At this point in time you can use the NPM package:

[https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch "https://www.npmjs.com/package/node-fetch")

But, it will soon be native to NodeJS! You'll need to opt-in to a pre-release, more info here:

[https://blog.logrocket.com/fetch-api-node-js/](https://blog.logrocket.com/fetch-api-node-js/ "https://blog.logrocket.com/fetch-api-node-js/") 