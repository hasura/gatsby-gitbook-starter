const config = {
	"gatsby": {
		"pathPrefix": "notes/",
		"siteUrl": "https://orlovcs.tech",
		"gaTrackingId": "UA-116546024-2"
	},
	"header": {
		"logo": "src/icon/apple-icon-60x60.png",
		"logoLink": "512.png",
		"title": "<a href='https://orlovcs.tech'><b>orlovcs</a>/notes/",
		"githubUrl": "https://orlovcs.tech",
		"helpUrl": "https://orlovcs.tech",
		"tweetText": "",
		"links": [
			{ "text": "Link to ", "link": ""}
		],
		"search": {
			"enabled": true,
			"indexName": "wiki",
			"algoliaAppId": "BSB8ZM9DNS",
			"algoliaSearchKey": "fdd84d5e99f47de9aba30175f9835217",
			"algoliaAdminKey": ""
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
			 "/codeblock",
			 
		],
    	"collapsedNav": [
      		"/codeblock"
    	],
		"links": [
			
		],
		"frontline": false,
		"ignoreIndex": false,
	},
	"siteMetadata": {
		"title": "Gatsby Gitbook Boilerplate | Hasura",
		"description": "Documentation built with mdx. Powering learn.hasura.io ",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Gatsby Gitbook Starter",
			"short_name": "GitbookStarter",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
