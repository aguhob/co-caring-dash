import React, { useEffect } from 'react';
import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import IFrame from '../components/FacebookFrame';
import '../styles/global.scss';

const Chat = () => {
  useEffect(() => {
    document.title = '#Co-Caring Chat'
  })
  
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

        </p>
      </TextSection>

      <IFrame source = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fcocaring%2Flearning_content%2F%3Ffilter%3D532557444068356&width=500&show_text=true&height=201&appId' >
      </IFrame>

    </>
  )
}

export default Chat
