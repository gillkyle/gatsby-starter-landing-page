<p align="center">
  <img alt="preview of page" src="https://github.com/gillkyle/images/blob/master/Screen%20Shot%202019-03-21%20at%209.14.46%20PM.png" />
</p>
<h1 align="center">
  Gatsby Landing Page Starter
</h1>

A simple, minimal, easy-to-use landing page starter without all sorts of bells and whistles bolted on that you'll just have to strip out later. Create a super fast, beautiful landing page from a barebones template with a single page that already looks good.

## Prerequisites

If you do not have the Gatsby CLI installed yet, do it first.

```bash
npm install --global gatsby-cli
```

The Gatsby CLI uses Node and npm which you will also need installed. More information can be found on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one/).

## 🚀 Getting Started

Install the starter using the Gatsby new command.

```bash
gatsby new landing-page https://github.com/gillkyle/gatsby-starter-landing-page.git
```

Navigate into the project directory and launch the site.

```bash
cd landing-page && gatsby develop
```

The site will be opened up in your default browser on http://localhost:8000

Edit code in the `/src`, save your changes, and they'll reload instantly in the browser.

## 🧐 What's inside?

The minimal landing page starter comes with a few plugins installed already, but it's main focus is on staying simple and looking clean. These things are included by default:

- 🖼 Gatsby Image: images added to the `src/images` folder are automatically optimized by the `gatsby-image` plugin and can be pulled into components with lazy loading and blur up effects
- 📊 Analytics: add your Google Analytics tracking id to `gatsby-config.js` to automatically begin tracking visitors to the site
- 🗺 Sitemap: any new pages added to the site are automically assembled together into a sitemap through `gatsby-plugin-sitemap`
- 🎨 Color Theme: the `src/styles/constants.js` file contains a set of colors and default styles that are applied inline to components on the site that can be overriden with your own styles

## 🧪 Experiment

If you want to try playing with the source code in an online playground you can open the repo in Codesandox with this button.

[![Edit gatsby-starter-portfolio-cara](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gillkyle/gatsby-starter-landing-page/tree/master/)

## 💫 Deploy

If you just want to see a site online real fast you can deploy a copy of the site to Netlify with this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gillkyle/gatsby-starter-landing-page)

To create an optimized build of the site run this command

```bash
gatsby build
```

A `/public` folder will be assembled that can be deployed to a service like Netlify, Surge, GitHub Pages, AWS S3, Firebase hosting, or your own file server.
