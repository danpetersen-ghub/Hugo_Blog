+++
categories = [" JavaScript"]
date = 2022-10-09T09:00:00Z
description = "Azure Functions & Serverless"
tags = ["All"]
title = "Azure Functions & Serverless II"

+++

## Azure Functions & Serverless - Part 2

Test the function locally:

1-  Open the terminal at <code>/api</code> folder  
2 - Press f5 (this opens up the debugger)
3 - click azure icon, 'execute function now (this actually runs the function)

Or just run the following command in <code>/api</code> folder  

        npm start

Essentially this opens Azure Core Tools.

Then you can go to Postman (I prefer ThunderClient within VScode) or wherever and run:

        http://localhost:7071/etcetcetc

And see what the Error message is from the Function. 

Then you need to deploy once tested....

Dont forget to <code>git commit -a -m "my awesome function"</code> 

you might need to <code>cd ..</code> to go up a directory.

go to Azure Icon in VS Code then under resources and the function you want to deploy to right click and 'deploy to function app'.