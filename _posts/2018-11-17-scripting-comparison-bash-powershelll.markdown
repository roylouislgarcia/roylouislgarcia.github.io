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
or
```
. gotoreview.sh
```

_Notes_: When running the *Bash* version of the program from cmder, _always_ precede the filename with "source" or a "." in order for change directory to work. Without it, the sublime command will run and windows explorer will open, but on you will not change directory to your TARGET folder. See the images below:

*Aftermath of _incorrectly_ running the Bash script version:*

<img src="/assets/images/tutorials/aftermathgotoreviewsh.png"/>

*Aftermath of _correctly_ running the Bash script:*

<img src="/assets/images/tutorials/aftermathgotoreviewsh2.png"/>



**Further Learning**

There are lots of websites that can help you learn either Bash or PowerShell scripting:

For PowerShell:
1. [Microsoft Documentation Page](https://docs.microsoft.com/en-us/powershell/scripting/PowerShell-Scripting?view=powershell-5.1)
2. [Another Microsoft PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
3. [A PowerShell Primer article written by Jonathan Hassell for ComputerWorld.com](https://www.computerworld.com/article/2879205/data-center/powershell-for-beginners-scripts-and-loops.html?page=3)

For Bash Scripting:
1. [Bash Beginners Guide by Machtelt Garrels](http://tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html) 
2. [Advanced Bash Scripting Guide by Mendel Cooper](https://www.tldp.org/LDP/abs/html/)
3. [Udemy Courses](https://www.udemy.com/courses/search/?src=ukw&q=bash+)

If you are interested in _cmder_, a powerful, portable console emulator for Windows, visit their site on [cmder.net](http://cmder.net/). 


<img src="/assets/images/tutorials/cmderdotnet.png"/>
