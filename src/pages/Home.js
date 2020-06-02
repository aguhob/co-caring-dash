import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import Dashboard from '../components/Dashboard';
import Support from '../images/cristian-newman-CeZypKDceQc-unsplash.jpg'
import Map from '../images/homepage-map.png'
import Toll from '../components/Toll';
import { TipList, TipItem, TrendingList, TrendingItem } from '../components/ResourcesComponents';

const Home = () => {
  useEffect(() => {
    document.title = '#Co-Caring Dashboard'
  })
  
  return (
    <>
      <TopBanner 
        title = "Co-Caring"
        copy = "We are bringing people together for positive impact in response to the novel coronavirus."
        button = {true}
        buttonText = 'JOIN OUR CHAT'
        buttonUrl = 'https://facebook.com/groups/cocaring'
        button2  = {true}
        button2Text = 'SIGN UP FOR OUR NEWSLETTER'
        button2Url = 'https://vytality.us17.list-manage.com/subscribe/post?u=3e5efe76c5c9d889e2612acac&amp;id=0170a7e43d'
        imgClass = 'home'
      />
      
      <TextSection title=''>
        <p><center><font size = '0' font color="#2a99ff"><b>OUR MISSION</b></font></center></p>
        <p><center><font size = '+2'><b>We are all caregivers and care receivers.</b></font></center></p>
        <p><center>As private individuals and as organizations, our current situation calls us to both. In response to the ongoing challenge to track the spread of COVID-19 and connect individuals, organizations and communities who want to help, we have created the <font color="#2894D1"><b>#Co-Caring Dashboard.</b></font></center></p>
      </TextSection>
              

      <TextDivider/>
      <TextSection title=''>
        <p><center><font size = '0' font color="##2a99ff"><b>TRACKING CORONAVIRUS</b></font></center></p>
      </TextSection>
      
      &nbsp;
      
      <TipList>
        <TipItem 
          imgClass = 'Map'
          title = 'Track COVID-19 in your state and county'
          copy = ''
          textSide = 'right'
        />
      </TipList>

      <TextSection title=''>
        <p><center><font size = '0' font color="##2a99ff"><b>HOW TO CO-CARE</b></font></center></p>
      </TextSection>
      
      <TrendingList>
        <TrendingItem 
          imgClass = 'co-caring-chat'
          title = 'Support and Connect'
          copy = 'Start a project or support those in need to shelter in place.'
          url = 'https://co-caring.org/chat'
        />

        <TrendingItem 
          imgClass = 'resources'
          title = 'Find Resources'
          copy = 'Find testing, public health departments and other information.'
          url = 'https://co-caring.org/resources'
        />

        <TrendingItem 
          imgClass = 'coronavirus-tool'
          title = 'Learn the Basics'
          copy = 'Use our Coronavirus Tool for helpful basics.'
          url = 'https://medium.com/@vytality/from-vytality-health-a-rapid-response-tool-for-coronavirus-dc7a0a1c1644'
        />
      </TrendingList>
      
      
      <TextSection title=''>
        <p><center><font size = '+2' font color="#2894D1"><b>Coronavirus in the US: Latest Counts</b></font></center></p>
      </TextSection>

      <Toll/>
      <Dashboard />
      </>

        
   
  )
}
export default Home
