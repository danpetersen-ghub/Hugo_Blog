+++
categories = [" JavaScript"]
date = 2022-09-25T09:00:00Z
description = "Azure Functions & Serverless"
tags = ["All"]
title = "Azure Functions & Serverless"

+++

## Azure Functions & Serverless

(actually serverfull!)

#### What is serverless?

"Azure Functions is a serverless solution that allows you to write less code, maintain less infrastructure, and save on costs."

Create function App and a function.

Go to integration, add an output blob storage.

I then had to create a storage too but I think this should have been automatic.

Then in your app use context.bindings object to write to the storage. Make sure the function.json is updates inline with the integration tab.

        module.exports = async function(context) {
            context.log('Node.js Queue trigger function processed', context.bindings.myQueueItem);
            context.bindings.myOutputBlob = context.bindings.myInputBlob;
        };

Then check the stage and see the blob.

More info:
<https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-output?tabs=in-process%2Cextensionv5&pivots=programming-language-javascript>
