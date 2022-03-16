+++
date = 2022-03-16T08:00:00Z
description = "Working with Data often is just easier with Excel"
title = "creating CSV's with JavaScript"

+++
# .csv

In previous posts, we looked at getting, filtering, and generally playing with data in JS.

But they are times when displaying the data in excel is just quicker. It's also much more useful with working with teams, especially those who don't know JS or data outside of a nice pretty table.

Generally speaking, there are two ways to create a csv from JS that I know of, but I'm sure there are a bunch of libraries or packages that make this super simple too.

1- In the browser

2- Node JS

So, for the browser I use this bookmarklet all the time:

    const obj = {};
    let title = document.getElementsByClassName("row-header");
    let time = document.getElementsByClassName("task_total ");
    
    for (var i = 0; i < title.length; i++) {
      obj[i + "_" + title[i].innerHTML] = time[i].innerText;
    }
    console.table(obj);
    
    let string = ``;
    for (const property in obj) {
      string += encodeURIComponent(`${property}, ${obj[property]}, \r\n`);
    }
    
    let csvContent = "data:text/csv;charset=utf-8," + string;
    
    console.log(csvContent);
    window.location.href = csvContent;

it's certainly not the prettiest code you'll ever see, but it gets the job done! 🤣

Let's break it down:

Lines 1-3 are initializing our object and getting the DOM nodes that contain our data.

We then loop through the node list and extract the text then place it on our object. Now we have some nice data. 👍

##### bit of background...

A .csv extension is literally just comma 'comma-separated values'. So another way of thinking about this is a massively long string!

This is why we set up the variable for said string:

    let string = ``;

By default, I almost always use an object literal syntax hence the backticks. It makes the string much simpler to understand in my opinion. Additionally, in marketing automation platforms this is how you would insert dynamic content be that HTML or a field value. Anyhow, I digress...

This is where you actually create the CSV:

    for (const property in obj) {
      string += encodeURIComponent(`${property}, ${obj[property]}, \r\n`);
    }
    
    let csvContent = "data:text/csv;charset=utf-8," + string;

First, you loop over the object and kinda stringify it. We also use \\r\\n to signify the new row. If you want multiple columns you'll need to modify this obviously.

We then need to wrap this in:

    encodeURIComponent()

More info here:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent")

Then we add (or append) (+=) to the string for each property of the object.

Finally, we set this at the start to signify the file the browser should make:

    data:text/csv;charset=utf-8,

That is then our CSV content,

    console.log(csvContent);
    window.location.href = csvContent;

We then set the browser to open another tab and the URL will be the .csv string. you'll then get a pop-up and you can open the csv. As I say I have this and a bookmarklet so you can just open the page the DOM node list is set for then hit the bookmark and .csv extract is created.

In NodeJS, it's somewhat similar, but you don't need to do as much i.e.

    function saveFile(string) {
        let csvContent = "data:text/csv;charset=utf-8," + string ;
        
        fs.writeFile(`2022_02_01-CSV-Results.csv`, csvContent,
         function (err) {
            if (err) throw err;              
            console.log('File Saved');
        }
    );

The above function will take the string and create a file, and insert the sting content.

So there you have it, from the browser you can essentially create a custom csv export button using a bookmarklet.

And via nodeJS, you can combine many of the same principles to create a .csv file. How you get the content is another matter!  😎