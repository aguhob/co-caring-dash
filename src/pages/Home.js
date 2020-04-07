import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import Dashboard from '../components/Dashboard';
import Toll from '../components/Toll';


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
        buttonText = 'Co-Caring Chat'
        buttonUrl = 'https://facebook.com/groups/cocaring'
        imgClass = 'home'
      />
      
      <TextSection title='Mission Statement'>
        <p>We are all caregivers and care receivers. As private individuals and as organizations, our current situation calls us to both. And in a crisis, efforts -- like neighbors helping neighbors, to organizations working with citizens and other organizations -- are often not scalable. In response to the ongoing challenge to track the spread of COVID-19 and to connect individuals, organizations and communities who want to help, we have created the #Co-Caring Dashboard.</p>
        <p>To use the #Co-Caring Dashboard, please scroll down for information about COVID-19 in your state and county.</p>
          <ul>

            <li>If you’re interested in joining or starting a co-caring project, such as supporting the elderly to shelter in place, click on the&nbsp;
              <Link to='/chat'>
                Co-Caring Chat
              </Link>
              &nbsp;to connect with others.
            </li>

            <li>To support others in getting tested or finding public health department information, or helpful info on sheltering in place, try our&nbsp;
              <Link to='/resources'>
                Resources
              </Link>
            &nbsp;tab. </li>

            <li>To learn the basics on what to do and when, please&nbsp;
              <a href='http://bit.ly/coronavirustool' target="_blank" rel="noopener noreferrer">
                click here
              </a>
              &nbsp;for our Coronavirus Tool for helpful information.
            </li>

          </ul>
        
      </TextSection>

      <TextDivider />

      <div>
        {/* <Link to='/reddit'> */}
          <p style={{textAlign: 'center'}}>
            <Link to='/chat'>
              Connect to #co-caring people and projects to slow COVID-19 spread here.
            </Link>
          </p>
        {/* </Link> */}
      </div>

      <Dashboard />
      <Toll />
    </>
  )
}

export default Home
