---
layout: post
comments: true
title:  "Testing Wireshark CSV to R Integration"
topic: datascience
---

In creating a dashboard-like real-time interface that computer security experts can use for reactionary mitigation of hacker exploits, data processing requires a fast program and precise measurements. For this project, data processing tools will be tested whether the output of wireshark can be processed. The integration of tools computer security experts use and data scientists use must be tested prior to automation.

This wireshark instance starts in Ubuntu Mate Linux distribution. Starting wireshark to capture via wireless interface (wlan1)...

![picture of wireshark gui run on ubuntu](/assets/images/datascience/wireshark.png)

A few minutes of captures data is sufficient for testing.

![another picture of wireshark gui run on ubuntu](/assets/images/datascience/wireshark2.png)

Exporting the data as "datacapture.csv"...

![another picture of wireshark gui run on ubuntu](/assets/images/datascience/wireshark3.png)

Within the same directory where "datacapture.csv" is saved, R should be able to open, assign to the R variable "df" (dataframe) in order to be analyzed.

![R Analysis of the wireshark output](/assets/images/datascience/Ranalysis.png)

{%- include comments.html -%}