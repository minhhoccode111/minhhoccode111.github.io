---
layout: post
title: "About"
description: "About Minh Dang (aka minhhoccode111) - Fullstack Golang Developer"
# description: "help SEO"                # help optimzie SEO
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
# banner: "static/media/images/a.jpg"    # banner for the post
---

# Hi

I'm Minh Dang (aka minhhoccode111).

I taught myself to code and enhanced my craft with a lot of inspiration from [The Primeagen](https://www.youtube.com/@ThePrimeagen).

And that was really fun 😆

{% include iframe_video.html id="QIyc6NKS5J0" aspect="56.25" %}

## Contact me

- Gmail: <minhhoccode111@gmail.com>
- Github: <https://github.com/minhhoccode111>

{% comment %}

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
- ReactJS
- MongoDB
- PostgreSQL

{% endcomment %}

{% comment %}
this is a commented block to show examples

example a code block

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

example download file
[Golang file](/static/files/hello-world.go)

example embed our static image, with style
{% include scaled_image.html src="/static/media/images/avatar.png" alt="My Github Avatar" width="800" %}

example embed our static video, html
<video autoplay="autoplay" loop="loop" controls muted playsinline  oncontextmenu="return false;"  preload="auto"  class="demo">

  <source src="/static/media/demos/vim.mp4" type="video/mp4">
</video>

embed our static image, markdown native size
![Local Port Forwarding](/static/media/images/avatar.png)

example loop through every page in a directory

<ul class="double-spaced">
  {% assign projects = site['project'] | sort: 'date' | reverse %}
  {% for project in projects %}
    {% if project.phony != true %}
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
