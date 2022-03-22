import React, {Fragment, useState, useEffect} from "react"
import "./footer.scss"
import MarketoForm from "./marketoform";
const marketoHost = "https://page.hasura.io";
import newsletterSuccess from './images/newsletter-success.svg';
import Paperform from "./Paperform";
const SubscribeNewsletter = ({location}) => {
  const [isAliId, setIsAliId] = useState(false);
  const [isLocalFooterSubscribe, setIsLocalFooterSubscribe] = useState(false);
  const onSubmitCB = () => {
    if (typeof window !== undefined) {
      window.localStorage.setItem("blogFooterSubscribeConsent", "true");
    }
  }
  useEffect(() => {
    const locationValue = location ? location.search : null;
    const searchParams = new URLSearchParams(locationValue);
    const searchAliId = searchParams.get("aliId");
    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
    }
    if (typeof window !== undefined) {
      if ("localStorage" in window && window.localStorage && "getItem" in window.localStorage) {
      const blogFooterSubscribeConsent = window.localStorage.getItem("blogFooterSubscribeConsent")
        if(blogFooterSubscribeConsent) {
          setIsLocalFooterSubscribe(true);
        }
      }
    }
  }, []);
  return (
    <div className={'subscribeNewsletterWrapper'}>
      <div className='hasura-ibm-plex-sub-title'>
        Stay in the know
      </div>
      <div className='articleDesc'>
        Sign up for full access to our community highlights, new features, and occasional baby animal gifs! Oh, and we have a strict no-spam rule. <span role="img" aria-label="Enoji">✌️</span>
      </div>
      {
        isAliId && isLocalFooterSubscribe ? (
          <div className='subscribeNewsletterSuccess articleDesc fontBold'>
            <img src={newsletterSuccess} alt='Success' />
            Thank you for subscribing to our newsletter!
          </div>
        ) : (
          <Fragment>
            {/* <MarketoForm onSubmitCB={onSubmitCB} formId='1011' marketoHost={marketoHost} id="631-HMN-492" styleClass="marketoFormWrapper subscribeNewsletterForm"/> */}
            <Paperform onSubmitCB={onSubmitCB} formId='hf-1011' styleClass="marketoFormWrapper subscribeNewsletterForm"/>
          </Fragment>
        )
      }
    </div>
  )
}

export default SubscribeNewsletter
