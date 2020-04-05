import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';
import LeadershipDashboard from '../components/LeadershipDashboard';

const Home = () => {
  useEffect(() => {
    document.title = '#Co-Caring Dashboard'
  })
  
  return (
    <>
      <TopBanner 
        title = "Leadership Dashboard"
      />
      
      <TextSection>
        <p>Sample Text</p>
        
      </TextSection>

      <TextDivider />

      <LeadershipDashboard />

    </>
  )
}

export default Home
