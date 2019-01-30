---
layout: page
title: Topics
---
Here is a list of topics I write on, in order to see a list of the actual blogs under these topics,, click the <img class="smallerredarrow" src="/assets/images/arrow-png-red-35.png"> 

  {% for topic in site.topics %}
  <div class="block-content">
      <h2><a href="{{ topic.url }}"><img class="redarrow" src="/assets/images/arrow-png-red-35.png">{{ topic.name }}</a></h2>
      <p>{{ topic.content | markdownify }}</p>
</div>
  {% endfor %}


