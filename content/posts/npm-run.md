+++
date = 2022-04-18T08:00:00.000Z
description = "pakage.json"
title = "NPM RUN"
categories = [ "All" ]
tags = [ "All" ]
_template = "post_template"
+++

# npm... it's pretty powerful

So when I started out, I thought it was just a code library and had handling dependencies functionality. Which is, in itself, ridiculously powerful.

But what I didn't realize, is that it goes much further!

Specifically the scripts part of the package.json file:

    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      }

By default, you get the "test", which is nice but obviously, there isn't any test created. More useful for day 1 is "dev" vs "start". You can obviously call these whatever you want, but the key bit I was missing is the command:

    npm run <Script Name>

This will then kinda 'insert' the text value into the command line, and result in the same output as literally typing "nodemon app.js".

I haven't tested it yet but you can use '&&' to run multiple scripts. This could be useful for provisioning the Database.

This kind of stuff most tutorials seem to overlook or just mention without taking the time to show/explain. This is where [Traversey Media's]() videos shine,  he walks through some end-to-end projects that do cover the additional parts of a project not core to the project itself.

I have now also used this for cypress testing, I can easily configure the "test" value to run the automated test!

_Note to self:_

_Not sure why exactly, but I did have to create a file: .npmrc_

_Contents:_

    # .npmrc
    engine-strict=true
