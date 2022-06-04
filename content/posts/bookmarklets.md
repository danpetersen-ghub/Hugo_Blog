+++
categories = ["JavaScript"]
date = 2022-03-07T09:00:00Z
description = "Bookmarks and JavaScript"
tags = ["All"]
title = "Bookmarklets"

+++
# Bookmarks and JavaScript.

For a while now its been extremely useful to extract data from a webpage via the console.

Until recently I had to go though the arduous process of opening the dev tools, tabbing to console, then inserting code.

Very...very...slow!

So, it turns out its really easy to save these little javascript snippets as bookmarks then with one click, BAM, the code is run in the page. Great! 👍

All you need is:

    javascript: // some codez

This is ok but it directly inserts the code in to the main JS of the page. This is why you see the bookmarklet boiler code wrapped in an IIFE this means that the code is both immediately run but also scopes the code so it doesn't break the whole page!

More info on IIFEs here: [https://developer.mozilla.org/en-US/docs/Glossary/IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE "https://developer.mozilla.org/en-US/docs/Glossary/IIFE")

Final boilerplate for a bookmarklet:

    javascript: (() => {
      // Your code here!
    })();

Steps:

- Create bookmark in your browser
- Paste the boilerplate in to your bookmark, where the url normally goes
- Paste in your Javascript
- Refresh your page, and click on the bookmark

Done ✅