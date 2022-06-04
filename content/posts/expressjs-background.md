+++
date = 2022-03-21T09:00:00Z
description = "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications"
title = "ExpressJS: Background"
categories = ["All"]
tags = ["All"]


+++
# ExpressJS: Background

Slightly different one this today. We will be looking at the Express framework in a little more depth. I've been learning NodeJS for a little while and found it to actually be more useful in day-to-day work than the client-based Javascript!

I needed to get my hands dirty with an actual project but didn't know what to build 🤦‍♂️(or rather I found I had too many ideas!). 

So instead I thought I would try to build a vanilla 'generic' starter app that could quickly be customized to become any sort of app I have an idea for. My [starter project](https://github.com/danpetersen-ghub/NodeJS-Starter "NodeJS Starter") quickly became very messy and most likely isn't a great starting point for a nice clean fresh app. 

But one of the difficult things I find is when frameworks 'abstract' a lot of stuff into one method and you don't really know what it does really. 

Anyhow, the focus, for now, is Express apps...

Note to self: Express has a starter project: [http://expressjs.com/en/starter/generator.html](http://expressjs.com/en/starter/generator.html  "http://expressjs.com/en/starter/generator.html")

##### How to use: 

So starting from absolute basics, load the node modules in to your script:

    //Install Express
    const express = require("express");
    const app = express();

First, you need to install the node modules via the terminal:

    npm install express 

Then you can use express in the app. But there are a couple of other dependencies you probably need too:

    //API
    const bodyParser = require("body-parser");
    const router = express.Router();

Simple routing, to clarify express abstracts all the fin technical stuff from HTTP routing, which would could just do with the node native HTTP module, into nice clean methods:

More info: [https://nodejs.dev/learn/making-http-requests-with-nodejs](https://nodejs.dev/learn/making-http-requests-with-nodejs "https://nodejs.dev/learn/making-http-requests-with-nodejs")

So I didn't get into any methods just yet, but other posts will take a deeper dive! 👨‍🎓 