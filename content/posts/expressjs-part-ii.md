+++
date = 2022-03-23T08:00:00Z
description = "Looking in to more methods for express!"
draft = true
title = "ExpressJS: Part II"

+++
# Using Express

So following the post yesterday we are adding a little more functionality to our simple webserver/API. 

    //Install express and use in app
    var express = require("express");
    var app = express();
    
    //Seed Data as json
    const data = require("./data.json");
    
    //all requests for data.json from main page
    app.all("/", function (req, res) {
      res.send(data);
      console.log(`[${new Date().toISOString()}] new request:`);
      console.log("Request Method is: " + req.method);
      console.log("Request Url is: " + req.url);
    });
    
    //Go Live with Server
    app.listen("1234", function () {
      console.log("running:  http://localhost:1234/");
    });

Updates:

    app.all("/", function (req, res) { });

the express method.all accept any request GET, PUT, POST, DELETE, and so on. 

    console.log(`[${new Date().toISOString()}] new request:`);
    // output: [2022-03-23T08:51:29.979Z] new request:

So this is obviously not part of express and there are better APIs out there to use for date functionality but this produces a quick way to log out a date time stamp. 

    console.log("Request Method is: " + req.method);
    console.log("Request Url is: " + req.url);
    /*
    output:
    Request Method is: GET
    Request Url is: /
    */

The parameters of the call-back function can be accessed as objects!

The final output is:

    C:\Users\****\test\express>nodemon express
    [nodemon] 2.0.12
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node express.js`
    running:  http://localhost:1234/
    [2022-03-23T08:51:29.979Z] new request:
    Request Method is: GET
    Request Url is: /
    [2022-03-23T08:53:46.501Z] new request:
    Request Method is: POST
    Request Url is: /
    [2022-03-23T08:53:51.834Z] new request:
    Request Method is: PUT
    Request Url is: /
    [2022-03-23T08:53:56.447Z] new request:
    Request Method is: DELETE
    Request Url is: /

These requests were made using: [https://www.thunderclient.com/](https://www.thunderclient.com/ "https://www.thunderclient.com/")

It's postman-esque but all in VS code which is nice!