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
    
     <TextSection title='Find Co-caring Projects'>
    
        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=531981410841637">Requests for Support: Needs</a></h4><p>Learn about the different needs people have, and consider starting a co-caring support project.</p></div>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=532557444068356">Active U.S. Co-Caring Projects</a></h4><p>Learn about co-caring COVID-19 efforts active nationwide in the U.S.</p></div>

        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221200022531149/"Salesforce / 1BPPE.com partnership to provide PPE equipment</a></h4></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222503435734141/"Reach4Help: A map of mutual aid resources with links.</a></h4></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222773585707126/"Giving and receiving support for immunocomprised people.</a></h4></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222503875734097/"Mutual Aid Disaster Relief: a list of mutual aid resources by country and state/province.</a></h4></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219853725999112/"Covid Assist: neighbors helping neighbors through the coronavirus pandemic.</a></h4></blockquote>
        <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219426259375192/"[US-NYC] Sponsor an N95 Mask for a COVID Nurse/Doctor</a></h4></blockquote>



        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=155235539083962">Active Online Co-Caring Projects</a></h4><p>Learn about online COVID-19 support projects.</p></div>    

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=6582539016180052">Active New York Co-Caring Projects</a></h4><p>Learn about co-caring COVID-19 efforts active in New York.</p></div>    

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=841147669726184">Active California Co-Caring Projects</a></h4><p>Learn about co-caring COVID-19 efforts active in California.</p></div>    


        <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

      </TextSection>
    
    </>
  )
}

export default Chat
