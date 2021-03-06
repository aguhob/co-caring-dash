import React, { useEffect } from 'react';
import TopBanner from '../components/TopBanner';
import TextDivider from '../components/TextDivider';
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
        title = "Join Us"
        copy = "Connect with your #Co-Caring community."
        button = {false}
        imgClass = 'aboutUs'
      />

    
     <TextSection title='Join Us'>
        <p><center>Consider participating and supporting one of the many projects.
        </center></p>
      </TextSection>

    <TextSection>
        <p style={{textAlign: 'center', marginTop: '3rem'}}>
          <a href='https://facebook.com/groups/cocaring' target='_blank' rel="noopener noreferrer">
            #Co-Caring Chat: COVID-19 Support is on Facebook 
          </a>
        </p>

      <TextDivider/>

      &nbsp;
      
      <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=2668631300033869"><font size="+2">Getting Started: Advice & How To</font></a></h4><p>Useful models and dashboards for getting started with co-caring. Stories on what other people have done to get their co-caring for COVID-19 projects launched from idea to reality.</p></div>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=2803078506487182"><font size="+2">Local county data dashboards (supporting Co-Caring)</font></a></h4><p>Dashboards with resource data (hospitals, number of elderly residents, etc) in conjunction with data on COVID-19 spread.</p></div>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=817479075438782"><font size="+2">City - State - US Data COVID-19 Dashboards</font></a></h4><p>Watch COVID-19 data in real time for major cities and nationwide.</p></div>
    
        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=531981410841637"><font size="+2">Requests for Support: Needs</font></a></h4><p>Learn about the different needs people have, and consider starting a co-caring support project.</p></div>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=532557444068356"><font size="+2">Active U.S. Co-Caring Projects</font></a></h4><p>Learn about co-caring COVID-19 efforts active nationwide in the U.S.</p></div>

          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222503875734097/">Mutual Aid Disaster Relief: a list of mutual aid resources by country and state or province></a></h4></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221200022531149/">Salesforce and 1BPPE.com partnership to provide PPE equipment</a></h4></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222503435734141/">Reach4Help: A map of mutual aid resources with links.</a></h4></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222773585707126/">Giving and receiving support for immunocomprised people.</a></h4></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219853725999112/">Covid Assist: neighbors helping neighbors through the coronavirus pandemic.</a></h4></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219426259375192/">Sponsor an N95 Mask for a COVID Nurse/Doctor in an NYC Hospital</a></h4></blockquote>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=155235539083962"><font size="+2">Active Online Co-Caring Projects</font></a></h4><p>Learn about online COVID-19 support projects.</p></div>    

          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/218941629423655/">Coaching for Healthcare Workers.</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219087299409088/">Notes for Support (to CV Patients, Healthcare Workers).</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/218548009463017/">[US] Resources and advice on self-care from the National Alliance on Mental Illness.</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219306389387179/">Yale's The Science of Well Being</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/218653982785753/">Talk to someone: National Domestic Violence Hotline</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/218668069451011/">Talk to someone: CrisisTextLine.comh</a></h4><p></p></blockquote>

        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=658253901618005"><font size="+2">Active New York Co-Caring Projects</font></a></h4><p>Learn about co-caring COVID-19 efforts active in New York.</p></div>    

          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221299209187897/">Offer mental health support to NYC COVID Health Workers</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/218663842784767/">NYC volunteer projects: NY Cares COVID-19</a></h4><p></p></blockquote>
          
        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=841147669726184"><font size="+2">Active California Co-Caring Projects</font></a></h4><p>Learn about co-caring COVID-19 efforts active in California.</p></div>    
      
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/222511239066694/">Miracle Messages: Connecting homeless COVID-19 patients to families</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221788815805603/">California Health Corps: Volunteer for COVID-19</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221180322533119/">State of California: Identifying COVID-19 Medical Supply Contributions</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/220085399309278/">Meal Assistance for Bay Area Queer Community</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/221074889210329/">Project Baseline: Testing info for Bay Area (by Google)</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219114086073076/">SF Bay Area: #TogetherAlone Resource Doc</a></h4><p></p></blockquote>
          <blockquote class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/permalink/219104876073997/">California: Free Meals for Children 18 and Under</a></h4><p></p></blockquote>


        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=219990582437381"><font size="+2">General Covid-19 Info</font></a></h4><p>We are curating the best, latest info about coronavirus and COVID-19. Learn here.</p></div>
        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=263683064646675"><font size="+2">Mutual Aid Networks</font></a></h4><p>Learn about other organizations, communities, maps and tools who are connecting people to help.</p></div>
        <div class="embedly-card"><h4><a href="https://www.facebook.com/groups/cocaring/learning_content/?filter=551804562134697"><font size="+2">Relief Funds</font></a></h4><p>Learn about additional funding available for vulnerable populations and organizations.</p></div>

        <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

      </TextSection>
    
    </>
  )
}

export default Chat
