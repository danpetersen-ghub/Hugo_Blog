+++
date = 2022-04-18T08:00:00Z
description = ""
title = "Deploy with Heroku"

+++
# Deploying My App

After hearing about the many many ways to get an app 'live', I thought I would start simple and go with Heroku.

It's similar to Netlify in that a huge amount of the setup processes i.e. domain provision is handled for you.

Just because it was the simplest, does not mean it was easy!

First I started with creating an account, this was all fine, I also set up a pipeline to production environments. Again, no issues here.

Once the account linked to my Github, I could see the rebuild happen and everything went through fine! Success 👍

Until, after looking at the app.."undefined" 🤔

"Ohh....there is no Database!"

So, after adding my card details, I could then provision a clearDB MySQL Database.

However, this is where my app totally broke.

##### Issue 1 - Process.env

So it took many, many attempts to identify that when you create a Heroku Config Vars. They don't work like 'Tokens' in say Marketo, where you can just copy the name (like a normal variable) and paste it in the code and the value will be inserted.

Nope, you need to have "_process.env.<Config Var Name>"_  in your code. This will then have the value defined in your app.

##### Issue 2 - _mysql.createPool_();

The way I was connecting to the database was not a permanent connection! This baffled me as I would deploy, test think everything is ok, come back later to find the app has crashed!

Updated code:

    const DATABASE = mysql.createPool({
      connectionLimit: 10,
      host: process.env.CLEARDB_DB_HOST,
      user: process.env.CLEARDB_DB_USER,
      password: process.env.CLEARDB_DB_PASS,
      database: process.env.CLEARDB_DB_NAME,
    });

I also had to change the app.js file:

    .getConnection()

This seemed to work and the app is live!

So yes, glad I started with a 'simpler' tool to deploy the app. I also inadvertently found out how to configure the npm package.json file.

But next step is to find out about testing frameworks, having to effectively manually check the app was working after every deploy took so.much.time!

and here it is:

[https://nodestarter-prod.herokuapp.com/#](https://nodestarter-prod.herokuapp.com/# "https://nodestarter-prod.herokuapp.com/#")

<iframe src="https://nodestarter-prod.herokuapp.com/")   " title="name" style="height: 700px;width:100%;"> </iframe>