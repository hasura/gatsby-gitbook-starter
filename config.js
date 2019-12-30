const config = {
	"gatsby": {
		"pathPrefix": "notes/",
		"siteUrl": "https://orlovcs.tech",
		"gaTrackingId": "UA-116546024-2"
	},
	"header": {
		"logo": "src/favicon.png",
		"logoLink": "https://orlovcs.tech",
		"title": "<a href='https://orlovcs.tech'><b>orlovcs</a>/<a href='https://orlovcs.tech/notes'><b>notes</a>/",
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
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Gatsby Gitbook Boilerplate | Hasura",
		"description": "Documentation built with mdx. Powering learn.hasura.io ",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "src/favicon.png"
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
