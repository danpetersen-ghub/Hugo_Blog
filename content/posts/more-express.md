+++
date = ""
description = "More Express"
draft = true
title = "More Express"

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
    