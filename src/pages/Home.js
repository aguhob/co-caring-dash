import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import Dashboard from '../components/Dashboard';

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
        buttonText = 'JOIN OUR CO-CARING CHAT'
        buttonUrl = 'https://facebook.com/groups/cocaring'
        imgClass = 'home'
      />
      
      <TextSection title=''>
        <p><center><font size = '+2'><b>We are all caregivers and care receivers.</b></font></center></p>
        <p><center>As private individuals and as organizations, our current situation calls us to both. In response to the ongoing challenge to track the spread of COVID-19 and connect individuals, organizations and communities who want to help, we have created the #Co-Caring Dashboard.</center></p>
        <p><center>To use the #Co-Caring Dashboard, please scroll down for information about COVID-19 in your state and county.</center></p>
      </TextSection>
              


      <TrendingList>
        <TrendingItem 
          imgClass = 'co-caring-chat'
          title = 'Support and Connect'
          copy = 'Start a project or support those in need to shelter in place.'
          url = 'https://confident-perlman-c95a55.netlify.com/chat'
        />

        <TrendingItem 
          imgClass = 'resources'
          title = 'Find Resources'
          copy = 'Find testing, public health departments and other information.'
          url = 'https://confident-perlman-c95a55.netlify.com/resources'
        />

        <TrendingItem 
          imgClass = 'coronavirus-tool'
          title = 'Learn the Basics'
          copy = 'Use our Coronavirus Tool for helpful basics.'
          url = 'https://medium.com/@vytality/from-vytality-health-a-rapid-response-tool-for-coronavirus-dc7a0a1c1644'
        />
      </TrendingList>

      <Toll/>
      <Dashboard />
      </>

        
   
  )
}
export default Home
