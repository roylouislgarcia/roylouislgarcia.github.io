---
layout: page
title: Topics
---

*To get a list of the actual blog posts under these topics, click on the names of the topics below:*

<ul>
  {% for topic in site.topics %}
    <li>
      <h2><a href="{{ topic.url }}">{{ topic.name }}</a> <img class="redarrow" src="/assets/images/arrow-png-red-35.png"></h2>
      <p>{{ topic.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>

<style type="text/css">
.redarrow {
  width:50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
li{
  decoration:none;
}
</style>