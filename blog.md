---
layout: post
title: Blog
description: "{{ site.description }} - Blog"
permalink: /blog/
banner: "/static/media/images/pepe-flower.webp"
lang: en
---

<ul>
{% assign posts = site['blog'] | sort: 'date' | reverse %}
{% for post in posts %}
    {% if post.phony != true %}
        <li>
        <strong>{{ post.date | date: '%d/%-m/%y' }}</strong>:
        {% if post.ready %}
            <a href="{{ post.url }}">{{ post.title }}</a>
        {% else %}
            {{ post.title }} [comming soon]
        {% endif %}
        </li>
    {% endif %}
{% endfor %}
</ul>
