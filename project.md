---
layout: post
title: Project
description: "Minh Dang (aka minhhoccode111) - Fullstack Developer - Projects"
permalink: /project/
banner: "/static/media/images/pepe-bubble.png"
lang: en
---

<style>
  .projects-table {
    width: 100%;
    border-spacing: 4px;
  }

  .projects-table th,
  .projects-table td {
    padding: 0px 8px;
    text-align: left;
    vertical-align: top;
  }

  .projects-table th {
    font-weight: bold;
  }

  /* .projects-table tr:nth-child(even) td{ */
  /*   border-top: 1px solid #f9f9f9; */
  /*   border-bottom: 1px solid #f9f9f9; */
  /* } */

  .projects-table tr td{
    border-bottom: 1px solid #999;
  }
</style>

<table class="projects-table">
  <thead>
    <tr>
      <!-- <th>Date</th> -->
      <th>Name</th>
      <th>Repo</th>
      <th>Demo</th>
      <th>Note</th>
      <!-- <th>Details</th> -->
    </tr>
  </thead>
  <tbody>
    {% assign projects = site['project'] | sort: 'date' | reverse %}
    {% for project in projects %}
      {% if project.phony != true %}
        <tr>
          <!-- <td><strong>{{ project.date | date: '%d/%-m/%y' }}</strong></td> -->
          <td>
            {% if project.hascontent %}
              <a href="{{ project.url }}">{{ project.title }}</a>
            {% else %}
              {{ project.title }}
            {% endif %}
            {% if project.subtitle %}
              {{ project.subtitle }}
            {% endif %}
          </td>
          <td>
            {% if project.repourl %}
              <a href="{{ project.repourl }}">Repo</a>
            {% else %}
              -
            {% endif %}
          </td>
          <td>
            {% if project.demourl %}
              <a href="{{ project.demourl }}">Demo</a>
            {% else %}
              -
            {% endif %}
          </td>
          <td>
            {% if project.noteurl %}
              <a href="{{ project.noteurl }}">Note</a>
            {% else %}
              -
            {% endif %}
          </td>
          <!-- <td> -->
          <!--   {% if project.details %} -->
          <!--     {{ project.details }} -->
          <!--   {% endif %} -->
          <!-- </td> -->
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

{% comment %}

## Legacy

Such a mess 😆

| Name                | Deploy                                                                 | Repo                                                                     | Concepts                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dotfiles            | -                                                                      | [view](https://github.com/minhhoccode111/dotfiles)                       | `Linux` `Bash` `Git` `Vim` `Tmux` `Kitty` `Alacritty` `Ghostty`                                                                                                                                                                           |
| DSA                 | -                                                                      | [view](https://github.com/minhhoccode111/data-structures-and-algorithms) | `DSA`                                                                                                                                                                                                                                     |
| OSTEP               | -                                                                      | [wip](https://github.com/minhhoccode111/ostep)                           | `OS`                                                                                                                                                                                                                                      |
| Missing Semester    | -                                                                      | [wip](https://github.com/minhhoccode111/missing-semester-mit)            | `Linux`                                                                                                                                                                                                                                   |
| Game Management     | -                                                                      | [view](https://github.com/minhhoccode111/game-management)                | `C#` `.NET` `Razor` `SQL Server` `EF Core` `Bootstrap` `Azure`                                                                                                                                                                            |
| Personal Site       | -                                                                      | [wip](https://github.com/minhhoccode111/minhhoccode111)                  |                                                                                                                                                                                                                                           |
| CS50x               | -                                                                      | [view](https://github.com/minhhoccode111/cs50x)                          | `CS` `DSA`                                                                                                                                                                                                                                |
| Fakebook Messing    | [view](https://fakebookmessing.vercel.app)                             | [view](https://github.com/minhhoccode111/fakebook-messing)               | Back: `Express` `Mongo` `Mongoose` `Passport` `JWT` `Rest.nvim` `Glitch` `TDD` `Bun` `Supertest` `Mongodb memory server` <br> Front: `TS` `React` `React Router` `Shadcn` `Tailwind` `Zustand` `React Form` `Zod` `Axios` `Vite` `Vercel` |
| Nvim                | -                                                                      | [view](https://github.com/minhhoccode111/nvim)                           | `Nvim` `Lua`                                                                                                                                                                                                                              |
| Messaging App       | [view](https://messagingapptop.vercel.app)                             | [view](https://github.com/minhhoccode111/messaging-app)                  | Back: `Express` `Mongo` `Mongoose` `Passport` `JWT` `Postman` `Glitch` `TDD` `Jest` `Supertest` `Mongodb memory server` <br> Front: `React` `React Router` `Tailwind` `Zustand` `Vite` `Vercel`                                           |
| Where's Waldo Front | [view](https://whereswaldotop.vercel.app)                              | [view](https://github.com/minhhoccode111/wheres-waldo-front)             | `React` `React Router` `Tailwind` `Vite` `Vercel`                                                                                                                                                                                         |
| Where's Waldo Back  | -                                                                      | [view](https://github.com/minhhoccode111/wheres-waldo-back)              | `Express` `Mongo` `Mongoose` `Postman` `Glitch`                                                                                                                                                                                           |
| Members Only        | [view](https://membersonlytop.glitch.me/)                              | [view](https://github.com/minhhoccode111/members-only-top)               | `Express` `Mongo` `Mongoose` `Passport` `Pug` `Tailwind` `Glitch`                                                                                                                                                                         |
| Inventory App       | [view](https://inventoryapplicationtop.glitch.me/)                     | [view](https://github.com/minhhoccode111/inventory-application-top)      | `Express` `Mongo` `Mongoose` `Multer` `Pug` `Tailwind` `Glitch`                                                                                                                                                                           |
| Local Library       | [view](https://locallibrarymdnbe.glitch.me/)                           | [view](https://github.com/minhhoccode111/local-library-mdn-be)           | `Express` `Mongo` `Mongoose` `Pug` `Bootstrap` `Glitch`                                                                                                                                                                                   |
| Mini Message Board  | [view](https://minimessageboardtop.glitch.me)                          | [view](https://github.com/minhhoccode111/mini-message-board-top)         | `Express` `Pug` `CSS` `Glitch`                                                                                                                                                                                                            |
| Basic Info Site     | -                                                                      | [view](https://github.com/minhhoccode111/basic-information-site-top)     | `Node` `HTML`                                                                                                                                                                                                                             |
| Shopping Cart       | [view](https://vaiquyensach.netlify.app/)                              | [view](https://github.com/minhhoccode111/shopping-cart-top/)             | `TS` `React` `React Router` `Tailwind` `Quotable-api` `Vite` `Netlify`                                                                                                                                                                    |
| Content Savior      | [view](https://contentsavior.netlify.app/)                             | [view](https://github.com/minhhoccode111/content-savior/)                | `React` `React Router` `Tailwind` `Vite` `Netlify`                                                                                                                                                                                        |
| Memory Card         | [view](https://uniquepokemon.netlify.app/)                             | [view](https://github.com/minhhoccode111/memory-card-top)                | `React` `Tailwind` `Vite` `Netlify`                                                                                                                                                                                                       |
| CV Application      | [view](https://cvapplicationtop.netlify.app/)                          | [view](https://github.com/minhhoccode111/cv-application-top)             | `TS` `React` `Tailwind` `Vite` `Netlify`                                                                                                                                                                                                  |
| Go Practice         | -                                                                      | [view](https://github.com/minhhoccode111/go-practice)                    | `Go`                                                                                                                                                                                                                                      |
| Dart Exercism       | -                                                                      | [view](https://github.com/minhhoccode111/dart-exercism)                  | `Dart`                                                                                                                                                                                                                                    |
| CSharp Exercism     | -                                                                      | [view](https://github.com/minhhoccode111/csharp-exercism)                | `C#`                                                                                                                                                                                                                                      |
| Exercises           | -                                                                      | [view](https://github.com/minhhoccode111/exercises)                      |                                                                                                                                                                                                                                           |
| Real World Express  | -                                                                      | [view](https://github.com/minhhoccode111/0-realworld-back-express)       | `Express` `Mongo` `Mongoose` `JWT` `Rest.nvim`                                                                                                                                                                                            |
| Homepage            | [view](https://minhhoccode111.github.io/homepage-top/)                 | [view](https://github.com/minhhoccode111/homepage-top)                   | `JS` `HTML` `CSS` `Webpack` `Tailwind` `Gh-pages`                                                                                                                                                                                         |
| Battleship          | [view](https://minhhoccode111.github.io/battleship-top/)               | [view](https://github.com/minhhoccode111/battleship-top/)                | `JS` `HTML` `CSS` `Webpack` `Gh-pages`                                                                                                                                                                                                    |
| Knight's Travails   | [view](https://knighttravailstop.netlify.app/)                         | [view](https://github.com/minhhoccode111/operate-algorithms/)            | `React` `Tailwind` `Vite` `Netlify`                                                                                                                                                                                                       |
| Whether App         | [view](https://weatherapptop.netlify.app/)                             | [view](https://github.com/minhhoccode111/weather-app-top)                | `React` `Tailwind` `Vite` `Giphy-api` `Weather-api` `Netlify`                                                                                                                                                                             |
| Todo List           | [view](https://minhhoccode111.github.io/todo-list-top/)                | [view](https://github.com/minhhoccode111/todo-list-top/)                 | `JS` `HTML` `CSS` `Webpack` `Gh-pages`                                                                                                                                                                                                    |
| Connect Four Game   | [view](https://minhhoccode111.github.io/connect-four-game-top/)        | [view](https://github.com/minhhoccode111/connect-four-game-top/)         | `JS` `HTML` `CSS` `Webpack` `Gh-pages`                                                                                                                                                                                                    |
| Restaurant Page     | [view](https://minhhoccode111.github.io/restaurant-page-top/)          | [view](https://github.com/minhhoccode111/restaurant-page-top/)           | `JS` `HTML` `CSS` `Webpack` `Gh-pages`                                                                                                                                                                                                    |
| Tic Tac Toe         | [view](https://minhhoccode111.github.io/tic-tac-toe-top/)              | [view](https://github.com/minhhoccode111/tic-tac-toe-top/)               | `JS` `HTML` `CSS` `DSA` `Gh-pages`                                                                                                                                                                                                        |
| Library             | [view](https://librarytop.netlify.app/)                                | [view](https://github.com/minhhoccode111/library-top/)                   | `TS` `React` `React router` `Tailwind` `Vite` `Netlify`                                                                                                                                                                                   |
| Snake Game          | [view](https://minhhoccode111.github.io/snake-game/)                   | [view](https://github.com/minhhoccode111/snake-game/)                    | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| Admin Dashboard     | [view](https://minhhoccode111.github.io/admin-dashboard-top/)          | [view](https://github.com/minhhoccode111/admin-dashboard-top/)           | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| Sign Up Page        | [view](https://minhhoccode111.github.io/sign-up-form-top/)             | [view](https://github.com/minhhoccode111/sign-up-form-top/)              | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| Calculator          | [view](https://minhhoccode111.github.io/calculator-on-web-top/)        | [view](https://github.com/minhhoccode111/calculator-on-web-top/)         | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| Drawing App         | [view](https://minhhoccode111.github.io/etch-a-sketch-top/)            | [view](https://github.com/minhhoccode111/etch-a-sketch-top/)             | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| RPS                 | [view](https://minhhoccode111.github.io/rock-paper-scissors-game-top/) | [view](https://github.com/minhhoccode111/rock-paper-scissors-game-top/)  | `JS` `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                              |
| Landing Page        | [view](https://minhhoccode111.github.io/landing-page-top/)             | [view](https://github.com/minhhoccode111/landing-page-top/)              | `HTML` `CSS` `Gh-pages`                                                                                                                                                                                                                   |
| Recipes Website     | [view](https://minhhoccode111.github.io/recipes-website-top/)          | [view](https://github.com/minhhoccode111/recipes-website-top)            | `JS` `HTML` `CSS` `Webpack` `Tailwind` `Gh-pages`                                                                                                                                                                                         |

{% endcomment %}
