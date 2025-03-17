---
layout: page
title: Blog
nositetitle: true
---

<ul>
{% assign posts = site['blog'] | sort: 'date' | reverse %}
{% for post in posts %}
    <li>
    <strong>{{ post.date | date: '%-m/%d/%y' }}</strong>:
    {% if post.ready %}
        <a href="{{ post.url }}">{{ post.title }}</a>
    {% else %}
        {{ post.title }}
    {% endif %}
    </li>
{% endfor %}
</ul>

{% comment %}
this is how to comment
{% endcomment %}
