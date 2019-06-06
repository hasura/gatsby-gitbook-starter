# gatsby-gitbook-starter

Kick off your project with this starter to create a powerful/flexible docs/tutorial web apps.

![gatsby-gitbook-starter](https://graphql-engine-cdn.hasura.io/learn-hasura/gatsby-gitbook-starter/assets/documentation_app_blog.png)

## Features
- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- GitBook style theme
- Syntax Highlighting using Prism [`Bonus`: Code diff highlighting]
- Google Analytics Integration
- Automatically generated sidebar navigation, table of contents, previous/next
- Edit on Github
- Fully customisable
- Easy deployment: Deploy on Netlify / Now.sh / Docker

## Live Demo

Here's a [live demo](https://learn.hasura.io/graphql/react)

## Setup

Get started by running the following commands:

```
$ npm install
$ npm start
```

Visit `http://localhost:8000/` to view the app.

## Configure

Write markdown files in `content` folder.

Open `config.js` for templating variables. Broadly configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like 
    - `pathPrefix` - Gatsby Path Prefix
    - `siteUrl` - Gatsby Site URL
    - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like
    - `title`
    - `githubUrl`
    - `helpUrl`
    - `tweetText`
    - `links`

- `sidebar` config for navigation links configuration
    - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename>"
    - `links`

- `siteMetadata` config for website related configuration
    - `title`
    - `description`
    - `ogImage`
    - `docsLocation`

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. Currently it supports only one level of nesting. The sub navigation is alphabetically ordered.

## SEO friendly

This is a static site and comes with all the SEO benefits. Configure meta tags like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
```

Canonical URLs are generated automatically.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hasura/gatsby-gitbook-starter)

