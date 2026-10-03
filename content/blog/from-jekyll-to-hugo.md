---
title: From Jekyll to Hugo (Without Breaking URLs)
date: 2026-10-03
ready: true
phony: true
details: Hugo, Jekyll, TailwindCSS, GitHub Actions
tags: ["Hugo", "Jekyll", "Tailwind CSS", "GitHub Actions", "Static Sites"]
banner: "/static/media/images/software-programming.webp"
lang: en
---

This site ran on Jekyll for a long time. I recently migrated it to Hugo to drop the Ruby toolchain, get faster builds, and keep deploying to GitHub Pages with the same setup. This post documents the migration, including the parts that were not obvious.

## Why Hugo

The main reasons were practical:

- **One binary.** Hugo is a single static executable, so there is no Ruby, Bundler, or `Gemfile.lock` to manage.
- **Fast builds.** This site builds in tens of milliseconds and the development server reloads immediately.
- **Plain output.** It writes static HTML, which is all GitHub Pages needs.

## Content and URLs

Jekyll collections map cleanly to Hugo sections. I moved `_blog` and `_project` into `content/blog` and `content/project`, and kept the same folder-per-post layout. Front matter is still YAML, so most fields carried over unchanged.

The URLs were the first real issue. Jekyll's `permalink: /:title/` derives the slug from the **filename**, while Hugo's default `:slug` is derived from the **title**. That silently changed several URLs, for example `from-vscode-to-nvim` became `from-vscode-to-nvim-four-easy-steps`. The fix is to tell Hugo to use the filename:

```toml
[permalinks]
  blog = "/blog/:contentbasename/"
  project = "/project/:contentbasename/"
```

With that, every existing URL matched exactly.

## Templates: Liquid to Go

Jekyll layouts and includes became Hugo templates and partials. The mapping is mostly mechanical:

- `_layouts/default.html` → `layouts/_default/baseof.html`
- `_layouts/post.html` → `layouts/_default/single.html`
- `_includes/*.html` → `layouts/partials/*.html`
- `{% include iframe_video.html ... %}` → a shortcode (`iframe_video`)

Lists needed more work. Where Jekyll loops over a collection:

```liquid
{% assign posts = site['blog'] | sort: 'date' | reverse %}
{% for post in posts %}
```

Hugo uses `.Site.RegularPages` filtered by section:

```go-html-template
{{ range (where .Site.RegularPages "Section" "blog").ByDate.Reverse }}
```

Custom `phony` and `ready` flags continued to work, which kept the same "hidden" and "coming soon" behavior in the listing.

One detail: Hugo's Goldmark renderer escapes raw HTML by default. Since the content contains inline HTML, it has to be enabled explicitly:

```toml
[markup.goldmark.renderer]
  unsafe = true
```

## Three gotchas worth knowing

**The `static/` directory behaves differently.** Jekyll copies a folder named `static/` as-is, so `static/css/main.css` is served at `/static/css/main.css`. Hugo copies the *contents* of `static/` to the site root, which would move it to `/css/main.css`. Since the whole site references `/static/...`, I nested the assets one level deeper, under `static/static/`, to preserve the prefix.

**Dates must be ISO 8601.** Jekyll accepted `2025-02-24 19:26`. Hugo rejected it, so those became `2025-02-24T19:26:00+07:00`.

**Redirects use aliases.** The old `about` page used a redirect layout. In Hugo it is a front matter alias on the target page:

```yaml
aliases: ["/about/"]
```

Markdown rendering also differs slightly between kramdown and Goldmark — mostly around loose vs. tight lists — but nothing structural.

## Styling with Tailwind (no Node)

The biggest change was the CSS. I replaced the hand-written stylesheet with Tailwind CSS v4, using the **standalone CLI binary** so the project still needs no Node toolchain. A `Makefile` downloads the pinned binary and compiles the stylesheet:

```make
css:
	bin/tailwindcss -i assets/css/tailwind.css -o assets/css/app.css --minify
```

The input stylesheet pulls in Tailwind, scans the templates, and defines design tokens with `@theme`:

```css
@import "tailwindcss";
@source "../../layouts/**/*.html";
@source "../../content/**/*.md";

@theme {
  --color-surface: #202224;
  --color-link: #66d9ef;
  --color-accent: #f92672;
  --font-mono: "Source Code Pro", monospace;
}
```

For syntax highlighting I kept Chroma (Hugo's highlighter, replacing Rouge) and generated a dark Monokai theme that matches the site's existing accents:

```bash
hugo gen chromastyles --style=monokai > assets/css/syntax.css
```

## Cache busting with Hugo Pipes

The compiled CSS and JavaScript are handled by Hugo's asset pipeline rather than served as static files. Each one is minified, fingerprinted, and given a Subresource Integrity hash:

```go-html-template
{{ $app := resources.Get "css/app.css" | minify | fingerprint "sha384" }}
<link rel="stylesheet" href="{{ $app.RelPermalink }}" integrity="{{ $app.Data.Integrity }}">
```

The result is hashed filenames (`app.min.<hash>.css`), so browsers pick up changes automatically. Small scripts — such as the copy button on code blocks — go through the same pipeline.

## Deployment

The GitHub Actions workflow is nearly unchanged in shape. It installs Hugo, compiles the CSS, builds the site, and deploys the `public/` directory as a Pages artifact. The base URL comes from the Pages configuration:

```yaml
- uses: actions/configure-pages@v5
  id: pages
- run: make css
- run: hugo --gc --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
- uses: actions/upload-pages-artifact@v3
  with:
    path: ./public
```

## Wrap up

The migration took a day or so, and most of that was the styling rewrite rather than Hugo itself. The site now builds from a single binary, keeps every original URL, and serves hashed, integrity-checked assets. If you are considering the switch, the content and templates are the easy part — watch the URL slugs and the `static/` directory.
