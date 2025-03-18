---
layout: post
title: "About"
description: "About Minh Dang (aka minhhoccode111) - Fullstack Golang Developer"
# description: "help SEO"                # help optimzie SEO
# layout: tutorial                       # have video at the top like the lecture
# date: 2025-03-18                       # for sorting logic, etc
# short_title: "Hello world"             # for meta preview if title too long
# subtitle: "Hello world"                # small text next to page title with our custom theme
# ready: true                            # our logic to display a usable link when loop
# details: Go, React, PostgreSQL etc     # display extra info with our custom theme
# phony: true                            # exclude a page when loop through a dir with our logic
# excerpt: ''                            # work around a bug
# nositetitle: true                      # to hide the side title from the page title
# permalink: /about                      # specify location instead of using default
# thumbnail: "static/media/images/a.jpg" # preview card on social like twitter
# lang: en                               # useful for accessibility and SEO, especially if your site is multilingual
# redirect_from: /old-about              # if migrate of renaming pages, prevent broken links
---

# Hi

I'm Minh Dang (aka minhhoccode111).

I taught myself to code and enhanced my craft with a lot of inspiration from [The Primeagen](https://youtu.be/QIyc6NKS5J0?si=j1C9zStlVkyJXa1O).

And that was really fun 😆

## Environment

- Arch
- NeoVim
- Ghostty
- Obsidian
- Brave

## Technologies

- Go
- .NET
- ExpressJS
- React
- MongoDB
- PostgreSQL

{% comment %}
example how to comment a block
{% endcomment %}

{% comment %}
example embed our video

<video autoplay="autoplay" loop="loop" controls muted playsinline  oncontextmenu="return false;"  preload="auto"  class="demo">

  <source src="/static/media/demos/vim.mp4" type="video/mp4">
</video>

{% endcomment %}

{% comment %}
example loop through every post in a directory

<ul class="double-spaced">
  {% assign projects = site['project'] | sort: 'date' | reverse %}
  {% for project in projects %}
    {% if lecture.phony != true %}
      <li>
        <strong>{{ project.date | date: '%-m/%d' }}</strong>:
        {% if project.ready %}
          <a href="{{ project.url }}">{{ project.title }}</a>
        {% else %}
          {{ project.title }} [coming soon]
        {% endif %}
        {% if project.details %}
          <br>
          ({{ project.details }})
        {% endif %}
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% endcomment %}
