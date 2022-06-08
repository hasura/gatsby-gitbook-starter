const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://pantheon.io/docs',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://d8ejoa1fys2rk.cloudfront.net/5.0.5/includes/img/icons/pantheon.ico',
    logoLink: 'https://pantheon.io/docs/',
    title:
      "<a href='https://pantheon.io/docs'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/pantheon-systems/documentation/tree/master/content',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/getpantheon" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Pantheon', link: 'https://pantheon.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://pantheon.io/docs'>graphql </a><div class='greenCircle'></div><a href='https://pantheon.io/docsgraphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Pantheon Documentation',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/pantheon-systems/documentation/tree/master/content',
    favicon: 'https://d8ejoa1fys2rk.cloudfront.net/5.0.5/includes/img/icons/pantheon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
