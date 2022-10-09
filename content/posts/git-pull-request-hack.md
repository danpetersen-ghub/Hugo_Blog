+++
categories = []
date = 2022-06-14T23:00:00Z
description = "Pull request not allowed!? "
tags = []
title = "not allowed to pull to main branch?"

+++

## StackOverflow to the rescue

If you or not allowed to pull to main branch, follow these commands:

    git checkout master   
    git branch main master -f    
    git checkout main  
    git push origin main -f 

No idea how or why this works!

Reference:
https://stackoverflow.com/questions/23344320/there-isnt-anything-to-compare-nothing-to-compare-branches-are-entirely-diffe