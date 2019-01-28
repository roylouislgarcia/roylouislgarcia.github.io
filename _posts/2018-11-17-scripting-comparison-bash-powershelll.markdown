---
layout: post
comments: true
title:  "Simple Comparison: Bash versus PowerShell"
topic: programming
---

This is just a simple glimpse into how I use Bash scripts and/or PowerShell scripts on my Windows 10 machine to automate my workflow and do more than one thing at a time. 

I normally start my console emulator, _cmder_, as a Bash admin, but sometimes, I open a new tab as a PowerShell admin. 

<img src="/assets/images/tutorials/cmderinit.png" width="500px"/>

As you can see from the above image, I wrote the following scripts to quickly set me up for work:
1. change my directory from the _cmder_ to one of my destination work folders: my product reviews, local git repositories, and nodejs development folder.
2. open the destination folder in Sublime
3. open the destination folder in Windows Explorer
4. show the path to the current (which was also the destination) folder

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
or
```
. gotoreview.sh
```

_Notes_: When running the *Bash* version of the program from cmder, _always_ precede the filename with "source" or a "." in order for change directory to work. Without it, the sublime command will run and windows explorer will open, but on you will not change directory to your TARGET folder. See the images below:

_Incorrect_:

<img src="/assets/images/tutorials/aftermathgotoreviewsh.png"/>

_Correct_:

<img src="/assets/images/tutorials/aftermathgotoreviewsh2.png"/>



**Further Learning**

There are lots of websites that can help you learn either Bash or PowerShell scripting:

For PowerShell:
1. [Microsoft Documentation Page](https://docs.microsoft.com/en-us/PowerShell/scripting/PowerShell-Scripting?view=PowerShell-5.1)
2. [Another Microsoft PowerShell Documentation](https://docs.microsoft.com/en-us/PowerShell/)
3. [A PowerShell Primer article written by Jonathan Hassell for ComputerWorld.com](https://www.computerworld.com/article/2879205/data-center/PowerShell-for-beginners-scripts-and-loops.html?page=3)

For Bash Scripting:
1. [Bash Beginners Guide by Machtelt Garrels](http://tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html) 
2. [Advanced Bash Scripting Guide by Mendel Cooper](https://www.tldp.org/LDP/abs/html/)
3. [Udemy Courses](https://www.udemy.com/courses/search/?src=ukw&q=bash+)

If you are interested in _cmder_, a powerful, portable console emulator for Windows, visit their site on [cmder.net](http://cmder.net/). 


<img src="/assets/images/tutorials/cmderdotnet.png"/>

{%- include comments.html -%}
