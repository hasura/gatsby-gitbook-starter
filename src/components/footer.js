import React, {Fragment} from "react"
import PropTypes from "prop-types"
import SubscribeNewsletter from './SubscribeNewsletter'
import "./footer.scss"
// const url = "//hasura.us13.list-manage.com/subscribe/post?u=9b63e92a98ecdc99732456b0e&amp;id=f5c4f66bcf"
// const hasuraLogoWhite = require("../../images/logo.svg")

import githubBrands from "./images/github-brands-gray.svg"
import twitterBrands from "./images/twitter-brands-gray.svg"
import discordBrands from "./images/discord-brands-gray.svg"
import facebookBrands from "./images/facebook-brands-gray.svg"
import instagramBrands from "./images/instagram-brands-gray.svg"
import youtubeBrands from "./images/youtube-brands-gray.svg"
import linkedinBrands from "./images/linkedin-brands-gray.svg"
// import hand from "../../images/hand.png";
import hasuraLogoColor from "./images/hasura-logo-color.svg";
import { getUTMPagePathName } from "../utils/getUTMPagePathName"
// const copyrightRegular = require("../../images/copyright-regular.svg")
const Footer = ({location}) => {
  const utmPagePathName = getUTMPagePathName(location?.pathname);
  return (
    <Fragment>
      <div className='commonSectionWrapper hasura-light-blue-bg-color'>
        {/* <img loading='lazy' src={hand} alt='hand' /> */}
        <div className="containerWrapper">
          <div className='newsletterWrapper'>
            <div>
              <div className='hasura-ibm-plex-sub-title'>
                Ready to get started?
              </div>
              <div className='articleDesc'>
                Start for free on Hasura Cloud or you could contact our sales team for a detailed walk-through on how Hasura may benefit your business.
              </div>
              <div className='buttonWrapper'>
                <a href={`https://cloud.hasura.io/?pg=${utmPagePathName}&plcmt=footer&cta=try-hasura&tech=default`}>
                  <button className='hasura-btn hasura-btn-md hasura-blue-btn'>TRY HASURA CLOUD</button>
                </a>
                <a href='https://hasura.io/contact-us/?type=hasuraenterprise'>
                  <button className='hasura-btn hasura-btn-md hasura-white-btn'>CONTACT SALES</button>
                </a>
              </div>
            </div>
            <SubscribeNewsletter location={location} />
          </div>
        </div>
      </div>
      <footer className='wd100 hasura-light-blue-bg-color'>
        <div className='containerWrapper'>
          <div>

          </div>
          <div className="footerWrappper wd100">
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Hasura</div>
              <a href="https://hasura.io/about/" className="links">About Us</a>
              <a href="https://hasura.io/press/" className="links">Press</a>
              <a href="/careers/" className="links">Careers</a>
              <a href="https://hasura.io/contact-us/" className="links">Contact Us</a>
              <a href="https://hasura.io/legal/" className="links">Legal Stuff</a>
            </div>
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Support</div>
              <a href="https://hasura.io/docs/latest/graphql/core/index.html" className="links" target="_blank" rel="noopener noreferrer">Documentation</a>
              <a href="https://discord.com/invite/hasura" className="links" target="_blank" rel="noopener noreferrer">Community Forum</a>
              <a href='https://hasura.io/help/' className="links">Website chat</a>
              <a href="https://github.com/hasura" className="links" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://status.hasura.io/" className="links" target="_blank" rel="noopener noreferrer">Hasura Cloud Status</a>
              {/* <a href="https://hasura.io/cloud-survey/" className="links hide" target="_blank" rel="noopener noreferrer">Hasura Cloud Survey</a> */}
            </div>
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Tools</div>
              <a href="https://github.com/hasura/graphqurl" className="links" target="_blank"rel="noopener noreferrer">Graphqurl</a>
              <a href="https://github.com/hasura/firebase2graphql" className="links" target="_blank" rel="noopener noreferrer">Firebase2GraphQL</a>
              <a href="https://github.com/hasura/json2graphql" className="links" target="_blank"rel="noopener noreferrer">JSON2GraphQL</a>
              <a href="https://github.com/hasura/graphql2chartjs" className="links" target="_blank" rel="noopener noreferrer">GraphQL2ChartJS</a>
            </div>
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Product</div>
              <a href="https://hasura.io/opensource/" className="links">Hasura Open Source</a>
              <a href="https://hasura.io/cloud/" className="links">Hasura Cloud</a>
              <a href="https://hasura.io/enterprise/" className="links">Hasura Enterprise</a>
              <a href="https://hasura.io/pricing/" className="links">Pricing</a>
              <a href="https://github.com/hasura/graphql-engine/releases" className="links" target="_blank" rel="noopener noreferrer">Changelog</a>
            </div>
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Resources</div>
              <a href={`https://hasura.io/blog/`} className="links" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="https://hasura.io/user-stories/" className="links">User Stories</a>
              <a href="https://3factor.app/" className="links" target="_blank" rel="noopener noreferrer">3Factor Apps</a>
              <a href="https://hasura.io/event-driven-programming/" className="links">Event Driven Programming</a>
              <a href="https://hasura.io/react-graphql/" className="links">React GraphQL</a>
              <a href="https://hasura.io/vue-graphql/" className="links">Vue GraphQL</a>
              <a href="https://hasura.io/diy-graphql-baas/" className="links">DIY GraphQL BaaS</a>
              <a href="https://hasura.io/graphql/" className="links">GraphQL & Hasura</a>
              <a href="https://hasura.io/security/" className="links">Hasura Cloud Security</a>
            </div>
            <div className="footerLinks hasura-ibm-plex-nav">
              <div className="footerLinksHeader">Community</div>
              <a href="https://hasura.io/community/" className="links">Community Resources</a>
              <a href="https://hasura.io/learn/" className="links" target="_blank" rel="noopener noreferrer">GraphQL Tutorials</a>
              <a href="https://github.com/hasura/graphql-engine/wiki" className="links" target="_blank" rel="noopener noreferrer">Community Wiki</a>
              <a href="https://hasura.io/sample-apps/" className="links">Sample Apps</a>
              <a href="https://hasura.io/partner-agencies/" className="links">Partnership Program</a>
              <a href="https://graphql.asia/" className="links" target="_blank" rel="noopener noreferrer">GraphQL Asia</a>
            </div>
          </div>
        </div>
        <div className='copyWriteWrapperBg wd100'>
          <div className="containerWrapper">
            <div className="copyWriteWrapper">
              <div className='brand'>
                <img src={hasuraLogoColor} alt='Brand logo' />
              </div>
              <div className="hasura-ibm-plex-mono">
                © {new Date().getFullYear()} Hasura Inc. All rights reserved
              </div>
              <div className="footerSocialIconsWrapper">
                <div className="socialBrands">
                  <a
                    href={"https://github.com/hasura/graphql-engine"}
                    rel="noopener noreferrer"
                    aria-label={"Github"}
                  >
                    <img loading="lazy" src={githubBrands} alt="Github" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://twitter.com/hasurahq"}
                    rel="noopener noreferrer"
                    aria-label={"Titter"}
                  >
                    <img loading="lazy" src={twitterBrands} alt="Titter" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://discord.com/invite/hasura"}
                    rel="noopener noreferrer"
                    aria-label={"Discord"}
                  >
                    <img loading="lazy" src={discordBrands} alt="Discord" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://www.facebook.com/HasuraHQ"}
                    rel="noopener noreferrer"
                    aria-label={"Facebook"}
                  >
                    <img loading="lazy" src={facebookBrands} alt="Facebook" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://www.instagram.com/hasurahq/?hl=en"}
                    rel="noopener noreferrer"
                    aria-label={"Instagram"}
                  >
                    <img loading="lazy" src={instagramBrands} alt="Instagram" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://www.youtube.com/channel/UCZo1ciR8pZvdD3Wxp9aSNhQ"}
                    rel="noopener noreferrer"
                    aria-label={"Youtube"}
                  >
                    <img loading="lazy" src={youtubeBrands} alt="Youtube" />
                  </a>
                </div>
                <div className="socialBrands">
                  <a
                    href={"https://www.linkedin.com/company/hasura"}
                    rel="noopener noreferrer"
                    aria-label={"Linkedin"}
                  >
                    <img loading="lazy" src={linkedinBrands} alt="Linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

Footer.propTypes = {
  location: PropTypes.object,
}

export default Footer
