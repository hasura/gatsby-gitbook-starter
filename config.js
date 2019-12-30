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
			"/STAT230",
			"/STAT231",
			"/MATH114",
			"/MATH127",
			"/MATH128",
			"/MATH135",
			"/MATH239",
			"/CS115",
			"/CS116",
			"/CS116",
			"/CS136",
			"/CS240",
			"/CS241", 
			"/CS245",
			"/CS246",
			"/CS251",
			"/CS341",
			"/CS348",
			"/CS349",
			"/CS350",
			"/CS456",
			"/CS458",
			"/ECON101",
			"/SCI206",
			"/CHEM120",
			"/CHEM120L",
			"/PHYS121",
			"/PHYS131L",
			"/PSYCH101",
			"/PHIL145",
			"/PHIL256",
			"/PHIL356",
			"/RS204",
			"/ENGL108D",
			"/ENGL109",
			"/CLAS202",
			"/GEOG102",
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
		"title": "ORLOVCS NOTES",
		"description": "Documentation for orlovcs's time at the University of Waterloo",
		"ogImage": null,
		"docsLocation": "https://orlovcs.tech/notes",
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
