import React, { useEffect } from 'react';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';

import '../styles/global.scss';

const Chat = () => {
  useEffect(() => {
    document.title = '#Co-Caring Chat'
  })
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0"></script>
  
  return (
    <>
      
    <TopBanner 
        title = "Chat"
        copy = "Connect with your #Co-Caring community."
        button = {false}
        imgClass = 'aboutUs'
      />

      <TextSection title='Connect'>
        <p style={{textAlign: 'center', marginTop: '3rem'}}>
          <a href='https://facebook.com/groups/cocaring' target='_blank' rel="noopener noreferrer">
            Facebook
          </a>

          &nbsp;|&nbsp;

          <a href='https://www.reddit.com/r/vytality/' target='_blank' rel="noopener noreferrer">
            Reddit
          </a>
          <div class="fb-page" data-href="https://www.facebook.com/groups/cocaring/learning_content/?filter=531981410841637" data-tabs="timeline" data-width="1000" data-height="900" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>

        </p>
      </TextSection>

    </>
  )
}

export default Chat
