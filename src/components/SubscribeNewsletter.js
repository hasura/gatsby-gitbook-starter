import React, { Fragment, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './floatingStyles.scss';
// import FloatingSubscribe from './FloatingSubscribe'
import IconHover from './IconHover';
import closeSubscribe from './images/close-subscribe.svg';

import pocketsImg from './images/pockets-share.svg';

import copyImg from './images/copy-share.svg';

import whatsappImg from './images/whatsapp-share.svg';

import twitterImg from './images/twitter-sahre.svg';

import linkedinImg from './images/linkedin-share.svg';

import pocketsHoverImg from './images/pockets-share-hover.svg';

import copyHoverImg from './images/copy-share-hover.svg';

import whatsappHoverImg from './images/whatsapp-share-hover.svg';

import twitterHoverImg from './images/twitter-sahre-hover.svg';

import linkedinHoverImg from './images/linkedin-share-hover.svg';

import mailHoverImg from './images/mail-share-hover.svg';

import hasuraGray from './images/hasura-gray.svg';

import hasuraBlue from './images/hasura-blue.svg';

const SubscribeNewsletter = ({ title, canonicalUrl }) => {
  const [isCopied, setIsCopiedToggle] = useState(false);

  const [hideNewsletter, setHideNewsletter] = useState(false);

  const [isHasuraCloud, setIsHasuraCloud] = useState(false);

  /*
  const handleNewsletterClose = () => {
    setHideNewsletter(true);
  };
  */

  const onCopy = () => {
    setIsCopiedToggle(true);
    setTimeout(() => setIsCopiedToggle(false), 3000);
  };

  const renderCopyIcon = () => {
    if (isCopied) {
      return <div className="copiedWrapper">Copied</div>;
    }
    return null;
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        var floatingClass = document.getElementById('floating-subscribe');

        if (currentScrollPos > 90) {
          floatingClass.className = 'floatingSubscribeVisible floatingTransition';
        } else {
          floatingClass.className = 'floatingSubscribeVisible';
        }
      };
    }
    return () => {
      window.onscroll = null;
    };
  });
  return (
    <Fragment>
      <div id="floating-subscribe" className="floatingSubscribeVisible">
        {/* <FloatingSubscribe handleNewsletterClose={handleNewsletterClose} hideNewsletter={hideNewsletter} location = {location} /> */}
        {!isHasuraCloud ? (
          <div className="floating-subscribe-wrapper mt-16">
            <div
              role="button"
              tabIndex="0"
              className="floating-subscribe-close"
              onClick={() => {
                setIsHasuraCloud(true);
              }}
              onKeyDown={() => {
                setIsHasuraCloud(true);
              }}
            >
              <img src={closeSubscribe} alt="Close" />
            </div>
            <h2 className="pr-40">Get Started with GraphQL Now</h2>
            <div className="post-subscription-description">
              Hasura Cloud gives you a fully managed, production ready GraphQL API as a service to
              help you build modern apps faster.
            </div>
            <div className="buttonWrapper">
              <a href="https://cloud.hasura.io/signup?pg=learn-course&plcmt=floating&cta=use-hasura-cloud-free&tech=default">
                <button className="subscribeBtn">Try Hasura Cloud for Free</button>
              </a>
            </div>
          </div>
        ) : null}
      </div>
      <div className="floatingShareWrapper">
        {hideNewsletter ? (
          <div className="shareIcon" role="button" tabIndex="0" onClick={() => setHideNewsletter(false)} onKeyDown={() => setHideNewsletter(false)}>
            <IconHover baseImgSrc={mailHoverImg} hoverImgSrc={mailHoverImg} altText="Mail" />
          </div>
        ) : null}
        <a
          className="shareIcon"
          href={`https://getpocket.com/save?url=${canonicalUrl}`}
          data-save-url={`${canonicalUrl}`}
          data-pocket-count="vertical"
          data-pocket-align="left"
        >
          <IconHover baseImgSrc={pocketsImg} hoverImgSrc={pocketsHoverImg} altText="Pocket" />
          {/*<img src={isMouseOver ? pocketsImg : pocketsHoverImg} alt='Pocket' />*/}
        </a>
        <CopyToClipboard text={`${canonicalUrl}`} onCopy={onCopy}>
          <div className="shareIcon">
            <IconHover baseImgSrc={copyImg} hoverImgSrc={copyHoverImg} altText="Copy" />
            {renderCopyIcon()}
          </div>
        </CopyToClipboard>
        <a
          className="shareIcon"
          href={`https://wa.me/?text=${canonicalUrl}`}
          data-action="share/whatsapp/share"
          /*
          onFocus={() => setIsMouseOver(!isMouseOver)}
          onBlur={() => setIsMouseOver(!isMouseOver)}
          */
        >
          <IconHover baseImgSrc={whatsappImg} hoverImgSrc={whatsappHoverImg} altText="Whatsapp" />
        </a>
        <a
          className="shareIcon"
          href={`https://twitter.com/intent/tweet?&text=${title}&url=${canonicalUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconHover baseImgSrc={twitterImg} hoverImgSrc={twitterHoverImg} altText="Twitter" />
        </a>
        <a
          className="shareIcon"
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${canonicalUrl}&title=${title}&summary=${title}&source=${canonicalUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconHover baseImgSrc={linkedinImg} hoverImgSrc={linkedinHoverImg} altText="Linkedin" />
        </a>
      </div>
      {isHasuraCloud ? (
        <div className="subscribeIcon">
          <div className="shareIcon" role="button" tabIndex="0" onClick={() => setIsHasuraCloud(false)} onKeyDown={() => setIsHasuraCloud(false)}>
            <IconHover baseImgSrc={hasuraGray} hoverImgSrc={hasuraBlue} altText="Mail" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default SubscribeNewsletter;
