+++
categories = [ ]
date = 2022-06-14T23:00:00.000Z
description = "Github is a must know! "
tags = [ ]
title = "Get Good At Git"
_template = "post_template"
+++

### A Simple Build Process

First, initialise git;

    git init

Then Branch the code base;

    git branch newBranch 

Then redirect to new branch

    git checkout newBranch 

Then make all edits you want.

    touch help.md

Add file;

    git add help.md 

OR add files;

    git add . 

Once ready, commit the changes;

    git commit -m "commit message"

Then you need to sync the change to the remote repo

    git push --set-upstream origin newBranch

Then you can go to the application and make a pull request.

If you forget to initialise the git repo until after you start coding:
        
    git checkout dev2   
    git branch main dev2 -f    
    git checkout main  
    git push origin main -f

Useful links:

[https://about.gitlab.com/images/press/git-cheat-sheet.pdf](https://about.gitlab.com/images/press/git-cheat-sheet.pdf "https://about.gitlab.com/images/press/git-cheat-sheet.pdf")

[https://ohshitgit.com/](https://ohshitgit.com/ "https://ohshitgit.com/")
