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

      <IFrame title = 'Salesforce / 1BPPE.com partnership to provide PPE equipment' source = 'https://www.facebook.com/groups/cocaring/permalink/221200022531149/' >
      </IFrame>

      <IFrame title = 'Active U.S. #Co-Caring Projects' source = 'https://www.facebook.com/groups/cocaring/learning_content/?filter=5325574440' >
      </IFrame>

      <IFrame title = 'Active Online #Co-Caring Projects ' source = 'https://www.facebook.com/groups/cocaring/learning_content/?filter=155235539083962' >
      </IFrame>
    
      <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=531981410841637">Facebook</a></h4><p>Log into Facebook to start sharing and connecting with your friends, family, and people you know.</p></blockquote>
      <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

    
    </>
  )
}

export default Chat
