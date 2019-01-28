---
layout: post
comments: true
title:  "Methodology of Observation"
topic: datascience
---

In exploring data from output of firewalls and packet analysis tools, it is important to set controls or defaults in which real-time data can be compared to. This means that in order to be able to explore what happens when a computer is being attacked by brute-force of password, something about the data needs to deviate from a predefined norm. The norm should be taken as a snapshot of when the network is working well, without any influence from exploit attempts. During the brute-force attack, changes in the R-plot analysis will be observed and analyzed. Certain alert and notification scheme will be implemented.

The deviation will then be analyzed and all variable factors looked into in order for the security expert to come up with probing questions. From a technical view, a subset of the data that produces the anomaly will be preserved for real-time probing. Meanwhile, the automated process of looking at the system continues.

Probing questions should be documented and disregarded if any turns out to be false negatives. Looking at various varying elements and views of computer security related concepts can help introduce further questions that are inclined to probing for causal hypothesis. For the example above, an "online" brute-force attacks will show login attempts from a single IP address and the small interval between login attempts should be observed from one of the R-plot analysis views. There should be a dataset that is created from counting authentication failures from either the firewall. This can easily detect visual changes when plotted on R.

A not so direct approach is analyzing the packet logs and looking into communication protocol specific entries of the communication between a client's IP and the login server. The packet behavior will provide visual cues that can help create a "brute-force" signature that can later be compared and analysed from various datasets created from other sources. The settings of how a web server can handle login attempts can also help create meaningful dataset elements to be observed. "HTTP 401 status code in your Web server logs" can be monitored as long as each login failed attempt is programmed to throw an HTTP 401.

Observations that will be created should be multivariate or having more then two variables that will be considered. It is not enough to look for the obvious since other factors may tell a richer story that computer security experts have not considered before. This is the element where data science can use machine learning to help create some real-time and predictive. Automation and machine learning can handle more variable to be considered.

Lastly, observations will be used to create analysis by integrating data graphics, words, numbers, images and diagrams. Some measurements of the strength of evidences will need to be factored into the analysis. Labeling plots are important in order to provide clear information and having enough sources should help improve credibility of the observations.

Methodology used in this project is inspired by Johns Hopkin's Roger D. Peng's presentation entitled "Principles of Analytic Graphics" and Edward Tuftle's principles as described in Beautiful Evidence.

Resources:

Peng, R. (2015). Principles of Analytic Graphics [video]. Retrieved from https://class.coursera.org/exdata-031/lecture/13

Tufte, E. (2006). Beautiful Evidence, Graphics Press, LLC. Retrieved from www.edwardtufte.com

{%- include comments.html -%}