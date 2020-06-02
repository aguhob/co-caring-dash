import React from 'react';

import topBannerStyles from '../styles/topbanner.module.scss';

const TopBanner = ({title, copy, button, button2, buttonText, button2Text, buttonUrl, button2Url, imgClass }) => {
  
  const handleClick = event => {
    const button = event.target.style;
    button.position='absolute'
    button.top='0.1rem'
    setTimeout(()=>{
      button.top='0';
      window.open(buttonUrl, '_blank');
    },100)
  }

  const handleClick2 = event => {
    const button2 = event.target.style;
    button2.position='absolute'
    button2.top='0.1rem'
    setTimeout(()=>{
      button2.top='0';
      window.open(button2Url, '_blank');
    },100)
  }
  
  
  return (
    <div className={topBannerStyles.container}>
      
      <div className={topBannerStyles[imgClass]}/>

      <div className={topBannerStyles.textContainer}>
        <h2>{title}</h2>
        <p>{copy}</p>
        
        {button ? 
          <button className={topBannerStyles.button}
            onClick = {handleClick}
          >
            {buttonText}
          </button>
        : <></>
        }
      
        &nbsp;&nbsp;
      
        {button2 ? 
          <button2 className={topBannerStyles.classname}
            onClick = {handleClick2}
          >
            {button2Text}
          </button2>
        : <></>
        }
      
      </div>
    </div>
    
  )
}

export default TopBanner