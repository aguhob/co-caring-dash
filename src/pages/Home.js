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
      
      <TextSection title=''>
        <p>We are all caregivers and care receivers. As private individuals and as organizations, our current situation calls us to both. In response to the ongoing challenge to track the spread of COVID-19 and connect individuals, organizations and communities who want to help, we have created the #Co-Caring Dashboard.</p>
        <p>To use the #Co-Caring Dashboard, please scroll down for information about COVID-19 in your state and county.</p>
      </TextSection>
    
      <TextSection title="How to use the #Co-Caring Dashboard">
        <ul>

            <li>To join or start a co-caring project (such as supporting the elderly to shelter in place): click &nbsp;
              <Link to='/chat'>
                Co-Caring Chat
              </Link>
              &nbsp;for advice and to connect with others.
            </li>
            <li> For more detail on health resources (such as public health depts and contact info, or info on sheltering in place): click &nbsp;
              <Link to='/resources'>
                Resources
              </Link>
            &nbsp;. </li>
 
            <li>For more general information and "What to Do, When":&nbsp;
              <a href='http://bit.ly/coronavirustool' target="_blank" rel="noopener noreferrer">
                click here
              </a>
              &nbsp;for more information.
            </li>
          </ul>
        
      </TextSection>
      <div>
        {/* <Link to='/reddit'> */}
          <p style={{textAlign: 'center'}}>
            <Link to='/chat'>
              Connect to #co-caring people and projects to slow COVID-19 spread here.
            </Link>
          </p>
        {/* </Link> */}
      </div>
      <Toll />
      <Dashboard />
    </>
  )
}
export default Home
