import React, { Fragment ,useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import './floatingStyles.scss'
// import FloatingSubscribe from './FloatingSubscribe'
import IconHover from './IconHover'
const closeSubscribe = require('./images/close-subscribe.svg');
const pocketsImg = require('./images/pockets-share.svg');
const copyImg = require('./images/copy-share.svg');
const whatsappImg = require('./images/whatsapp-share.svg');
const twitterImg = require('./images/twitter-sahre.svg');
const linkedinImg = require('./images/linkedin-share.svg');
const pocketsHoverImg = require('./images/pockets-share-hover.svg');
const copyHoverImg = require('./images/copy-share-hover.svg');
const whatsappHoverImg = require('./images/whatsapp-share-hover.svg');
const twitterHoverImg = require('./images/twitter-sahre-hover.svg');
const linkedinHoverImg = require('./images/linkedin-share-hover.svg');
const mailHoverImg = require('./images/mail-share-hover.svg');

const hasuraGray = require('./images/hasura-gray.svg');
const hasuraBlue = require('./images/hasura-blue.svg');
const SubscribeNewsletter = ({title, canonicalUrl}) => {
  const [isCopied, setIsCopiedToggle] = useState(false);
  const [hideNewsletter, setHideNewsletter] = useState(false);
  const [isHasuraCloud, setIsHasuraCloud] = useState(false);
  const handleNewsletterClose = () => {
    setHideNewsletter(true);
  }
  const onCopy = () => {
    setIsCopiedToggle(true);
    setTimeout(() => setIsCopiedToggle(false), 3000);
  };
  const renderCopyIcon = () => {
    if (isCopied) {
      return (
        <div className="copiedWrapper">Copied</div>
      );
    }
    return null;
  };
  useEffect(() => {
      if (typeof window !== undefined) {
        window.onscroll = function () {
          var currentScrollPos = window.pageYOffset;
          var floatingClass = document.getElementById("floating-subscribe");
          if (currentScrollPos > 90) {
              floatingClass.className = "floatingSubscribeVisible floatingTransition";
          } else {
            floatingClass.className = "floatingSubscribeVisible";
          }
        };
      }
      return () => {
        window.onscroll = null;
      };
  })
  return (
    <Fragment>
      <div id='floating-subscribe' className='floatingSubscribeVisible'>
        {/* <FloatingSubscribe handleNewsletterClose={handleNewsletterClose} hideNewsletter={hideNewsletter} location = {location} /> */}
        {
          !isHasuraCloud ? (
            <div className='floating-subscribe-wrapper mt-16'>
              <div className='floating-subscribe-close'
                onClick={() => {setIsHasuraCloud(true);}}
              >
              <img

                 src={closeSubscribe} alt='Close'
              />
              </div>
              <h2 className='pr-40'>Get Started Now</h2>
              <div className='buttonWrapper'>
                <a href='https://cloud.hasura.io/'>
                <button className='subscribeBtn'>Use Hasura Cloud for Free</button>
                </a>
              </div>
            </div>
          ) : null
        }
      </div>
      <div className='floatingShareWrapper'>
        {
          hideNewsletter ? (
            <div className='shareIcon'
              onClick={()=>setHideNewsletter(false)}
            >
              <IconHover
                baseImgSrc = {mailHoverImg}
                hoverImgSrc = {mailHoverImg}
                altText = 'Mail'
              />
            </div>
          ) : null
        }
        <a className='shareIcon'
          href={
            `https://getpocket.com/save?url=${canonicalUrl}`
          }
          data-save-url={`${canonicalUrl}`}
          data-pocket-count="vertical"
          data-pocket-align="left"
        >
          <IconHover
            baseImgSrc = {pocketsImg}
            hoverImgSrc = {pocketsHoverImg}
            altText = 'Pocket'
          />
          {/*<img src={isMouseOver ? pocketsImg : pocketsHoverImg} alt='Pocket' />*/}
        </a>
        <CopyToClipboard text={`${canonicalUrl}`} onCopy={onCopy}>
          <div  className='shareIcon'>
            <IconHover
              baseImgSrc = {copyImg}
              hoverImgSrc = {copyHoverImg}
              altText = 'Copy'
            />
            {renderCopyIcon()}
          </div>
        </CopyToClipboard>
        <a className='shareIcon'
          href={
            `https://wa.me/?text=${canonicalUrl}`
          }
           data-action="share/whatsapp/share"
           onFocus={() => setIsMouseOver(!isMouseOver)}
           onBlur={() => setIsMouseOver(!isMouseOver)}
        >
          <IconHover
            baseImgSrc = {whatsappImg}
            hoverImgSrc = {whatsappHoverImg}
            altText = 'Whatsapp'
          />
        </a>
        <a className='shareIcon'
          href={
            `https://twitter.com/intent/tweet?&text=${title}&url=${canonicalUrl}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconHover
            baseImgSrc = {twitterImg}
            hoverImgSrc = {twitterHoverImg}
            altText = 'Twitter'
          />
        </a>
        <a className='shareIcon'
           href={
              `http://www.linkedin.com/shareArticle?mini=true&url=${canonicalUrl}&title=${title}&summary=${title}&source=${canonicalUrl}`
            }
            target="_blank"
            rel="noopener noreferrer"
        >
          <IconHover
            baseImgSrc = {linkedinImg}
            hoverImgSrc = {linkedinHoverImg}
            altText = 'Linkedin'
          />
        </a>
      </div>
      {
        isHasuraCloud ? (
          <div className='subscribeIcon'>
            <div className='shareIcon'
              onClick={()=>setIsHasuraCloud(false)}
            >
              <IconHover
                baseImgSrc = {hasuraGray}
                hoverImgSrc = {hasuraBlue}
                altText = 'Mail'
              />
            </div>
          </div>
        ) : null
      }
    </Fragment>
  )
}
export default SubscribeNewsletter
