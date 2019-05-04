# gatsby-gitbook-boilerplate

Kick off your project with this boilerplate to create a powerful/flexible docs/tutorial web apps.

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

Link to live demo

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
    - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename.md>"
    - `links`

- `siteMetadata` config for website related configuration
    - `title`
    - `description`
    - `ogImage`
    - `docsLocation`

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. Currently it supports only one level of nesting.

#### Develop

```
$ npm start
```

#### Build

```
$ npm run build
```

