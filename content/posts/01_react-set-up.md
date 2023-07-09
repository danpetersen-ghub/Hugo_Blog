+++
categories = [ ]
date = 2022-06-20T23:00:00.000Z
description = "Create React App is an officially supported way to create single-page React applications. "
tags = [ ]
title = "01_React  - Set Up"
_template = "post_template"
+++

## React Set up

Create folder:

    mkdir appFolder
    cd appFolder

Create Scaffold:

    npx create-react-app my-app
    cd my-app
    npm start

Server is Online at http://localhost:3000/ !  🎉 

More info:

[https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/ "https://create-react-app.dev/docs/getting-started/")

Note to self react env vars are a bit odd:

    REACT_APP_FOO=$DOMAIN/foo
    REACT_APP_BAR=$DOMAIN/bar

You need to prepend <code>REACT_APP_</code> to your .env file. no need to call the dotenv node_files though.
