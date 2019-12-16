import React from "react"
import PropTypes from "prop-types"
import config from "../config";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {config.siteMetadata.ogImage ? 
            (<meta property="og:image" content={config.siteMetadata.ogImage} />) : null
          }
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage ? 
            (<meta property="twitter:image" content={config.siteMetadata.ogImage} />) : null
          }
          {config.siteMetadata.favicon ?
            (<link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />) : null
          }
          <noscript key="noscript">Your browser does not support JavaScript!</noscript>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css"
            integrity="sha256-bZLfwXAP04zRMK2BjiO8iu9pf4FbLqX6zitd+tIvLhE=" 
            crossOrigin="anonymous" 
          />
          <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js" 
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" 
            crossOrigin="anonymous">
          </script>
          <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js" 
            integrity="sha256-nuL8/2cJ5NDSSwnKD8VqreErSWHtnEP9E7AySL+1ev4=" 
            crossOrigin="anonymous">
          </script>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
            $(document).on('click','.navbar-collapse.in',function(e) {
              if( $(e.target).is('a') ) {
                $(this).collapse('hide');
              }
            });
            `
          }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
