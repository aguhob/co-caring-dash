import React from 'react'

import RShinyIframe from '../components/RShinyIframe';
import TableauViz from '../components/TableauViz';

import dashboardStyles from '../styles/dashboard.module.scss';

const Dashboard = () => {
  return (
    <div>
      <div className='paragraphContainer'>
        <h2>Dashboard</h2>
        <p>The death rate from COVID-19 is beginning to slow in many parts of the U.S., especially those in areas with early shelter in place orders. The #Co-Caring Dashboard tracks and projects future growth in the county or community’s COVID-19 death rate, currently the most accurate data point for tracking COVID-19. Use this map below to see the true impact of <strong>#shelterinplace.</strong></p>
      </div>

      <div className={dashboardStyles.vizGrid}>
        
        <RShinyIframe 
          className = {dashboardStyles.rShinyContainer}
          src = "https://my-shiny-app-creation.shinyapps.io/TrendChart/"
          title = 'shinytrendchart'
        />

      </div>
    </div>
  )
}

export default Dashboard