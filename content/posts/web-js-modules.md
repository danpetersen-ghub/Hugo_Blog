---
title: JavaScript Modules within the Browser
date: 2022-10-01T09:00:00.000+01:00
description: We all know that good code has, among other features, a good separation
  of concerns.
categories:
- Development
tags:
- Development

---
# JavaScript Modules within the Browser

We all know that good code has, among other features, a good separation of concerns. 

This will make it easier to test, refactor and debug. 

Often this actually starts with good upfront design.

This is why I like to use UML & MermaidJS to simulate C4 type of diagram. 

So, starting at the index.html file:

<pre>
<code>
Script Tag:
 &lt;script type="module" src="script.js" async="false" defer>&lt;/script>
</code>
</pre>

More info: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Then we have the file name

<pre>
<code>
./modules
    module1.mjs
    module2.mjs
    module3.mjs
index.html
script.js
styles.css
</pre>
</code>

We don't have to use .mjs for the modules but it does clearly denote the use of the file.


Then we use the import/export syntax to reference modules.

Within script.js:
<pre>
<code>
import class  from "./modules/module1.mjs";

const ClassName = new class

ClassName.log('Hi');
</pre>
</code>

Within module1.mjs


<pre>
<code>
class Logger {
    constructor(text) {
         this.text = '';       
    }   
   log(text) {
        this.text = text; 
         console.log(this.text);
   }
}

export default Logger; 
</pre>
</code>