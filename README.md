# Blog

[![Build Status](https://github.com/minhhoccode111/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/minhhoccode111/blog/actions/workflows/deploy.yml)

Contributions are most welcome! If you have edits or new content to add, please open an issue or submit a pull request.

## Development

This site is built with [Hugo](https://gohugo.io/) and styled with [Tailwind CSS](https://tailwindcss.com/) (v4, via the standalone CLI — no Node required).

Install the Hugo extended binary, then use the `Makefile`:

```bash
make dev     # Tailwind in watch mode + Hugo dev server (http://localhost:1313)
make css     # compile assets/css/tailwind.css -> assets/css/app.css (one-off)
make build   # production build (Tailwind + Hugo -> public/)
```

`make css` downloads the pinned standalone Tailwind binary into `bin/` (gitignored) on first run. Hugo fingerprints and inlines an SRI hash for the compiled CSS, so `make build` is what CI runs.
