import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TopBanner from '../components/TopBanner';
import TextSection from '../components/TextSection';
import TextDivider from '../components/TextDivider';

const Home = () => {
  useEffect(() => {
    document.title = '#Co-Caring Dashboard'
  })
  
  return (
    <>
      
      <TextSection title='#The Co-Caring Post'>
    
      <p><center>Learn more about how people are co-caring</center></p>
      <p><center>and what you can do in your community.</center></p>

      </TextSection>
    
    
    

    </>
  )
}

export default Home
