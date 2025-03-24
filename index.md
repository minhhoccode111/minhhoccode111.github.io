---
layout: post
title: "About"
description: "Minh Dang (aka minhhoccode111) - Fullstack Developer - About"
permalink: /
lang: en
banner: "/static/media/images/pepe-violin.png"
banner_credit: "Trust the process"
# description: "Helps with SEO optimization."
# date: 2025-03-18                        # Used for sorting logic, post ordering, etc.
# short_title: "Hello World"              # Alternative shorter title for meta previews if the main title is too long.
# subtitle: "Hello World"                 # Small text displayed next to the page title in our custom theme.
# ready: true                             # Controls whether a usable link should be displayed in loops.
# details: "Go, React, PostgreSQL, etc."  # Displays extra information in our custom theme.
# phony: true                             # Excludes the page from loops when iterating through a directory.
# excerpt: ""                             # Workaround for a known bug.
# nositetitle: true                       # Hides the site title from the page title.
# permalink: "/about"                     # Manually specifies the page URL instead of using the default structure.
# thumbnail: "static/media/images/a.jpg"  # Preview image for social media (Twitter, etc.).
# lang: "en"                              # Improves accessibility and SEO, useful for multilingual sites.
# redirect_from: "/old-about"             # Redirects old URLs when renaming/migrating pages to prevent broken links.
# banner: "static/media/images/a.jpg"     # Banner image for the post.
# banner_credit: "Image of abc"           # Banner image credit.
# repourl: "https://github.com/user/repo" # Repository link for projects, displayed if available.
# demourl: "https://user.github.io"       # Demo link for projects, displayed if available.
# hascontent: false                       # Determines whether navigation to the page should be enabled.
# noteurl: "/blog/asd" or "https://a.b/c" # Link to a related blog post, tutorial, or documentation (internal or external).
---

## Hi

I'm Minh Dang (aka minhhoccode111). I taught myself to code and enhanced my craft with a lot of inspiration from [The Primeagen](https://www.youtube.com/@ThePrimeagen). That was really fun 😆

When I'm not writing code, you will find me either:

- Watch **The Primeagen** ([He has been with me the whole journey](https://www.youtube.com/watch?v=96VlfN7ViyE))
- Or listen to [Ca Hoi Hoang](https://www.youtube.com/@cahoihoang) and [Ngot](https://www.youtube.com/c/Ng%E1%BB%8Dtband) (Sadly, they both disbanded)
- Or read [Vagabond](https://drive.google.com/drive/u/0/folders/1o7A4S189u5SZyDmnbok3sN9rvu3q39me) and **Berserk**
- Or watch **HxH** and **Haikyuu**!!

## My Environment

- **Arch**
- **NeoVim**
- **Ghostty**
- **Brave**
- **Obsidian**

## Contact me

- Gmail: <minhhoccode111@gmail.com>
- Github: <https://github.com/minhhoccode111>

{% include iframe_video.html id="QIyc6NKS5J0" aspect="56.25" %}

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
