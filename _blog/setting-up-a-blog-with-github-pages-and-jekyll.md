---
layout: post
title: "Setting up a Blog with Github Pages and Jekyll"
date: 2025-03-25
ready: true
# phony: true
banner: "/static/media/images/hello-world-banner.webp"
lang: en
---

Creating a blog using GitHub Pages and Jekyll is a fantastic way to share your thoughts, projects, and ideas with the world. Jekyll, a static site generator, allows you to create a blog with minimal setup, while GitHub Pages provides free hosting. In this guide, we’ll walk through the entire process, from setting up the repository to configuring the local development environment and deploying your blog using GitHub Actions.

---

## 1. Introduction

GitHub Pages is a free hosting service provided by GitHub that allows you to host static websites directly from a GitHub repository. Jekyll, on the other hand, is a static site generator that transforms your plain text into static websites and blogs. Together, they make a powerful combination for creating and hosting a blog with minimal effort.

In this blog post, we’ll cover:

- The prerequisites for setting up a blog with GitHub Pages and Jekyll.
- Steps to create a repository and configure GitHub Pages.
- Setting up a local development environment with Ruby and Jekyll.
- Structuring your Jekyll project for a blog.
- Automating deployment using GitHub Actions.

---

## 2. Prerequisites

Before we dive into the setup, ensure you have the following:

1. **A GitHub Account**: If you don’t have one, sign up at [GitHub](https://github.com/).
2. **Git Installed**: Download and install Git from [git-scm.com](https://git-scm.com/).
3. **Ruby Installed**: Jekyll is built on Ruby, so you’ll need to install Ruby. We’ll cover this in detail later.
4. **A Text Editor**: Use any text editor or IDE of your choice (e.g., Vim).

---

## 3. Steps to Set Up Your Blog

### Step 1: Create a GitHub Repository

1. Log in to your GitHub account.
2. Click on the **+** icon in the top-right corner and select **New repository**.
3. Name your repository `username.github.io`, where `username` is your GitHub username. This naming convention is required for GitHub Pages to work.
4. Choose **Public** or **Private**:
    - **Public**: Anyone can view your repository. Required if you want to use GitHub Pages for free without GitHub Pro.
    - **Private**: Only you (and invited collaborators) can see it. You need GitHub Pro to enable GitHub Pages on a private repo.
5. Click **Create repository**.

If you plan to use a **custom domain**, you can set it up later in the GitHub Pages settings after deploying your site.

### Step 2: Configure GitHub Pages Deployment

1. Go to your repository’s **Settings**.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Choose the **Jekyll** workflow template. This will create a `.github/workflows/jekyll.yml` file in your repository, which automates the build and deployment process.

### Step 3: Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone your repository:
    ```bash
    git clone https://github.com/username/username.github.io
    cd username.github.io
    ```

### Step 4: Set Up the Local Development Environment

#### Install Ruby

Jekyll requires Ruby. To ensure compatibility with GitHub Pages, install the same Ruby version used by GitHub Pages.

1. Check the Ruby version used by GitHub Pages in the [GitHub Pages documentation](https://pages.github.com/versions/).
2. Install the correct Ruby version using a version manager like `rbenv` or `rvm`. For example:
    ```bash
    rbenv install 3.1.2
    rbenv global 3.1.2
    ```
3. Verify the installation:
    ```bash
    ruby -v
    ```

#### Install Bundler

Bundler is a Ruby gem that manages dependencies for your Jekyll project.

1. Install Bundler:
    ```bash
    gem install bundler
    ```

#### Install Jekyll

1. Create a `Gemfile` in your project directory with the following content:
    ```ruby
    source "https://rubygems.org"
    gem "jekyll"
    gem "github-pages", group: :jekyll_plugins
    ```
2. Run the following command to install the dependencies:
    ```bash
    bundle install
    ```

### Step 5: Configure Your Jekyll Project

#### `_config.yml`

This file contains the configuration for your Jekyll site. Create a `_config.yml` file with the following content:

```yaml
title: Your Blog Title
description: A blog about your interests and projects.
baseurl: "" # Leave empty if hosting at username.github.io
url: "https://username.github.io" # Replace with your GitHub Pages URL
theme: minima # Default Jekyll theme
plugins:
    - jekyll-feed
```

#### `.gitignore`

Create a `.gitignore` file to exclude unnecessary files from version control:

```
_site
.sass-cache
.jekyll-cache
vendor
```

#### `Gemfile`

Your `Gemfile` should already exist from the previous step. Ensure it includes the `github-pages` gem for compatibility with GitHub Pages.

#### Favicon and Icons

Add a favicon to your site by placing a `favicon.ico` file in the root directory or the `static` folder.

#### `robots.txt`

Create a `robots.txt` file to control search engine indexing:

```
User-agent: *
Allow: /
```

### Step 6: Create Entry Files and Folders

#### Entry Files

Create the following files in the root directory:

- `index.md`: The homepage of your blog.
- `blog.md`: A page listing your blog posts.
- `project.md`: A page showcasing your projects.
- `404.md`: A custom 404 page for handling not-found errors.

Example `index.md`:

```markdown
---
layout: default
title: Home
---

# Welcome to My Blog

This is the homepage of my blog.
```

#### `_includes` Folder

This folder contains reusable components like headers, footers, and custom elements. For example, create a file `_includes/image.html` to display images at a specific ratio:

```html
<div class="image-container" style="padding-bottom: {{ include.ratio }};">
    <img src="{{ include.src }}" alt="{{ include.alt }}" />
</div>
```

#### `_layouts` Folder

This folder contains reusable layouts. For example:

- `default.html`: The default layout for all pages.
- `post.html`: A layout for blog posts.
- `redirect.html`: A layout for handling redirects.

Example `_layouts/default.html`:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>{ { page.title } }</title>
    </head>
    <body>
        { { content } }
    </body>
</html>
```

#### `static` Folder

Store static files like images, videos, and CSS in the `static` folder. For example, place your images in `static/images`.

### Step 7: Run Your Blog Locally

1. Start the Jekyll server:
    ```bash
    bundle exec jekyll serve -w --incremental
    ```
2. Open your browser and navigate to `http://localhost:4000` to view your blog.

### Step 8: Commit and Push Changes

1. Add your changes to Git:
    ```bash
    git add .
    git commit -m "Initial setup of Jekyll blog"
    ```
2. Push the changes to GitHub:
    ```bash
    git push origin main
    ```

### Step 9: Automate Deployment with GitHub Actions

The Jekyll workflow template you selected earlier will automatically build and deploy your site whenever you push changes to the `main` branch. You can view the deployment status in the **Actions** tab of your repository.

---

## 4. Conclusion

Congratulations! You’ve successfully set up a blog using GitHub Pages and Jekyll. You now have a fully functional blog with a local development environment and automated deployment. From here, you can customize your blog further by adding themes, plugins, and more content.

Feel free to send me an email and share your feedback or ask questions. If you found this guide helpful, consider sharing it with others who might benefit from it.

Happy blogging! 🚀
