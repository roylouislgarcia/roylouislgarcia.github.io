---
layout: post
title:  "Simple Comparison: Bash versus Powershell"
categories: tutorial scripting
permalink: /:categories/:year/:title
---

On my windows machine, I normally start my terminal emulator, _cmder_, as either a Bash admin or Powershell admin. 

<img src="/assets/images/tutorials/cmderinit.png" width="500px"/>

As you can see from the above image, from the _cmder_ folder, I wrote the following scripts to quickly set me up for work:
1. change my directory on _cmder_ to the TARGET folder
2. open that folder in Sublime
3. open that folder in Windows Explorer
4. show the path to the current( which is also the TARGET) directory 

Here is the simple PowerShell script:

<img src="/assets/images/tutorials/gotoreviewps1.png" width="500px"/>

to run it on _cmder_, I just type:
```
gotoreview.ps1
```

Here is the simple Bash script:

<img src="/assets/images/tutorials/gotoreviewsh.png" width="500px"/>

to run it on _cmder_, I just type:
```
source gotoreview.sh
```

If you are interested in _cmder_, a powerful, portable console emulator for Windows, visit their site on [cmder.net](http://cmder.net/). 


<img src="/assets/images/tutorials/cmderdotnet.png"/>
