+++
date = 2022-03-25T08:00:00Z
description = "More Express"
title = "More Express"
categories = ["All"]
tags = ["All"]
+++
# More Express

Today we are taking our webserver/api to the next level. We are including support to query our data object to only pull back the record we are after.

    //Install express and use in app
    var express = require("express");
    var app = express();
    
    //Seed Data as json
    const data = require("./data.json");
    
    //GET request for data.json from main page
    app.get("/:id", function (req, res) {
      res.send(data[req.params.id - 1]);
      console.log(`[${new Date().toISOString()}] new request:`);
      console.log("Request Method is: " + req.method);
      console.log("Request Url is: " + req.url);
    });
    
    //Send main page by any means
    app.all("/", function (req, res) {
      res.send("hello!");
      console.log(`[${new Date().toISOString()}] new request:`);
      console.log("Request Method is: " + req.method);
      console.log("Request Url is: " + req.url);
    });
    
    //Go Live with Server
    app.listen("1234", function () {
      console.log("running:  http://localhost:1234/");
    });

* First, we use .get() rather than .all() as we only want to allow get requests to our endpoint.
* Then we add a parameter to the endpoint "/:id" this means anything after the "/" will be added to the request into the req.params object
* We have also amended our query so that it uses bracket notation to pull back the index of the data we want. But we account for the index starting at 0, by -1 to the value.
  * Please note there is a clear disconnect here as we are not querying the ID property of the data, which is what we actually want to do, more on this in a future post!

And there we have it! we can now mage an HTTP GET request to

    //GET: http://localhost:1234/2
    //output:
    {
    	"id":2,
        "firstName":"Jane",
        "lastName":"Doe",
        "age":40,
        "eyeColor":"green"
     }

#### Update!

So the original post here was going to tie in earlier array methods to achieve the same thing but it didn't work! So I had to go back to the drawing board. 

Anyhow, after a little investigation, we can indeed use [array.Find()]()! 

The issue was type!!! I think this is the first genuine use case for typescript I've come across. So I should look into it in the future.  

New and improved GET endpoint:

    //GET request for data.json from main page
    app.get("/:id", function (req, res) {
      res.send(data.find(({ id }) => id == req.params.id));
      console.log(`[${new Date().toISOString()}] new request:`);
      console.log("Request Method is: " + req.method);
      console.log("Request Url is: " + req.url);
    });

The same output applies, but this time you can change the array index and the result will be as we actually want it! 

    //GET: http://localhost:1234/2
    //output:
    {
    	"id":2,
        "firstName":"Jane",
        "lastName":"Doe",
        "age":40,
        "eyeColor":"green"
     }