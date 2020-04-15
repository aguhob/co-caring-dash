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
      
      <TextSection title='Leadership Dashboard'>
      </TextSection>
    
      <LeadershipDashboard />

    </>
  )
}

export default Home
