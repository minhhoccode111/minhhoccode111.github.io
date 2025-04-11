---
layout: post
title: "Setting up a site with Github Pages and Jekyll"
date: 2025-03-25
ready: true
# phony: true
banner: "/static/media/images/hello-world-banner.webp"
lang: en
---

Alright, let’s talk about setting up a website using GitHub Pages and Jekyll. It’s a super straightforward way to get your ideas, projects, or whatever you’re passionate about online without spending a dime. Jekyll’s this neat tool that turns plain text into a full-on website, and GitHub Pages gives you free hosting to make it live. Pretty awesome, right?

I’m gonna walk you through the whole deal—creating a spot for your site on GitHub, getting it running on your computer so you can mess around with it, and even setting up automatic updates with GitHub Actions so you don’t have to manually push changes every time.

Before we jump in, I gotta give a shoutout to this [Missing Semester](https://missing.csail.mit.edu/) course, especially their [metaprogramming lesson](https://missing.csail.mit.edu/2020/metaprogramming/). It helped me wrap my head around some key stuff like:

- What build systems are (think tools that help organize how your site comes together).
- Managing different software versions so things don’t break.
- Testing code to catch issues early.
- Automating tasks with stuff like GitHub Actions, which we’ll totally use.
- How static site generators like Jekyll work with GitHub Pages.

---

### So, What’s the Game Plan?

GitHub Pages is like free web hosting from GitHub for simple sites. Jekyll takes text files you write—usually in Markdown, which is just a clean way to format text—and turns them into the HTML pages people see online. They’re a perfect combo.

Here’s what we’re gonna do:

- Get the basics you need ready.
- Set up your project on GitHub and flip the switch for GitHub Pages.
- Get Ruby and Jekyll running on your computer for local testing.
- Organize your site’s folders and files.
- Make updates happen automatically with GitHub Actions.

---

### Stuff You’ll Need

Before we start, make sure you’ve got these:

1. **A GitHub Account**: If you don’t have one, hop over to [GitHub](https://github.com/) and sign up. It’s free.
2. **Git Installed**: You’ll need this to manage your files. Download it from [git-scm.com](https://git-scm.com/) if you haven’t already.
3. **Ruby Installed**: Jekyll runs on Ruby, so you’ll need that on your machine. We’ll cover how to set it up right.
4. **A Text Editor**: Anywhere you’re comfy writing code or text—VS Code, Notepad++, Vim, whatever you like.

---

### Let’s Build This Thing

Here we go, step by step.

#### Step 1: Set Up a Home for Your Site on GitHub

1. Log into GitHub.
2. Hit the **+** button up top and pick **New repository**.
3. Name it `yourusername.github.io`—swap “yourusername” for your actual GitHub name. This tells GitHub it’s a special site for Pages.
4. Choose if it’s **Public** (anyone can see the code, needed for free Pages unless you’ve got GitHub Pro) or **Private** (only you and invited folks see it, but you’ll need Pro for Pages).
5. Click **Create repository**.

(Wanna use a custom domain like `mycoolsite.com`? You can set that up later in the repo settings once everything’s rolling.)

#### Step 2: Tell GitHub How to Launch Your Site

1. In your new repo, click **Settings**.
2. Find **Pages** on the left.
3. Under **Build and deployment**, pick **GitHub Actions** as the source.
4. GitHub will suggest some workflows—grab the **Jekyll** one. This adds a file (`.github/workflows/jekyll.yml`) that makes GitHub Actions build and publish your site automatically whenever you update it. Cool, huh?

#### Step 3: Pull the Project to Your Computer

1. Open your terminal or command prompt.
2. Clone the repo to your machine with this, replacing `username` with your GitHub name:
    ```bash
    git clone https://github.com/username/username.github.io
    cd username.github.io
    ```

#### Step 4: Get Your Local Setup Ready

You wanna work locally so you can see changes right away without pushing to GitHub every time.

**Install Ruby**

Jekyll needs Ruby, and we want the same version GitHub Pages uses to avoid headaches.

1. Check the Ruby version GitHub Pages uses at [GitHub Pages Dependency Versions](https://pages.github.com/versions/).
2. Install that exact version. A tool like `rbenv` or `rvm` makes it easier. For example, if it’s 3.1.2:
    ```bash
    rbenv install 3.1.2
    rbenv global 3.1.2
    ```
3. Confirm it’s right:
    ```bash
    ruby -v
    ```

**Get Bundler**

Bundler keeps track of all the Ruby bits (called gems) your site needs.

1. Install it:
    ```bash
    gem install bundler
    ```

**Set Up Jekyll**

1. Make a file called `Gemfile` (no extension) in your project folder and put this in it:
    ```ruby
    source "https://rubygems.org"
    gem "jekyll"
    gem "github-pages", group: :jekyll_plugins
    ```
    The `github-pages` gem makes sure your local setup matches what GitHub Pages expects.
2. Run this to install everything:
    ```bash
    bundle install
    ```
    It’ll take a sec to grab Jekyll and all its dependencies.

#### Step 5: Set Up Your Site’s Config

Now we create the files that tell Jekyll how your site works.

**`_config.yml`**

This is like your site’s control panel. Make a file called `_config.yml` in the root folder and add something like:

```yaml
title: My Cool Site
description: A place for my projects and random thoughts.
baseurl: ""
url: "https://username.github.io"
theme: minima
plugins:
    - jekyll-feed
```

Feel free to tweak the title and description!

**`.gitignore`**

This tells Git which files to ignore, like temporary ones Jekyll makes. Create `.gitignore` and add:

```
_site
.sass-cache
.jekyll-cache
vendor
```

**`Gemfile`**

You already made this, just make sure it’s there.

**Favicon**

That little icon in the browser tab? Make a `favicon.ico` file and stick it in the root folder (or a `static` folder we’ll make soon).

**`robots.txt`**

This tells search engines what’s up. Create `robots.txt` in the root folder:

```
User-agent: *
Allow: /
```

It’s like saying, “Yo, Google, check out my whole site.”

#### Step 6: Build Your Site’s Structure

Time to add some content.

**Main Pages**

Create these in the root folder—they’ll be your site’s core pages:

- `index.md`: Your homepage.
- `projects.md`: Maybe a spot for your work (optional).
- `404.md`: A page for broken links.

Here’s a quick `index.md` example:

```markdown
---
layout: default
title: Home
---

# Hey, Welcome!

This is my site—glad you’re here. I’ll be sharing projects and ideas.
```

The stuff between `---` is “front matter,” like settings for the page.

**`_includes` Folder**

Make a folder called `_includes` for reusable bits of HTML, like a header or footer. For example, `_includes/image.html` could be:

```html
<div class="image-wrapper">
    <img
        src="{ { include.src } }"
        alt="{ { include.alt } }"
        style="max-width: 100%; height: auto;"
    />
    { % if include.caption % }
    <p class="caption">{ { include.caption } }</p>
    { % endif % }
</div>
```

You’d use it like: `{ % include image.html src="/static/images/photo.jpg" alt="Me coding" caption="Deep in thought" % }`.

**`_layouts` Folder**

Create `_layouts` for page templates:

- `default.html`: The main skeleton (header, footer, nav).
- `page.html`: For regular pages, if you want something different.

Here’s a simple `default.html`:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>{ { page.title } } | { { site.title } }</title>
        <link rel="stylesheet" href="/static/css/style.css" />
    </head>
    <body>
        <header>
            <h1><a href="/">{ { site.title } }</a></h1>
            <nav>
                <a href="/">Home</a> | <a href="/projects.html">Projects</a>
            </nav>
        </header>
        <main>{ { content } }</main>
        <footer>
            <p>© 2025 Me</p>
        </footer>
    </body>
</html>
```

You’ll need that CSS file in `static/css/style.css`.

**`static` Folder**

Make a `static` folder for stuff like images, CSS, or JavaScript. Keep images in `static/images`, CSS in `static/css`, and so on.

#### Step 7: Check It Out Locally

Wanna see your site?

1. In your project folder, run:
    ```bash
    bundle exec jekyll serve -w --incremental
    ```
    - `bundle exec` uses the right gem versions.
    - `-w` watches for changes.
    - `--incremental` speeds things up.
2. Open `http://localhost:4000` in your browser. Your site should pop up! Tweak files, refresh the browser, and see changes live.

#### Step 8: Save and Push It

Like what you see? Let’s get it online.

1. Add and commit your changes:
    ```bash
    git add .
    git commit -m "First version of my site"
    ```
2. Push to GitHub:
    ```bash
    git push origin main
    ```

#### Step 9: Let Automation Do Its Thing

That GitHub Actions setup from Step 2? It kicks in now.

- Head to your repo on GitHub.
- Click **Actions**.
- You’ll see a workflow running. It’s building your site and pushing it live.

Give it a minute or two, and your site should be up at `https://username.github.io`.

---

### Boom, You’re Live!

Nice work! You’ve got a website running on GitHub Pages with Jekyll, a local setup to play with, and automatic updates. Now you can:

- Pick a new theme if you want a different vibe.
- Add more pages or sections.
- Tweak the CSS to make it your own.
- Start sharing your projects or ideas.

If you hit a snag or just wanna show off your site, let me know. Hope this was fun—go make something awesome! 🚀
