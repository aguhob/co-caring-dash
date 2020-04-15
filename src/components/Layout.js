import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { MobileBurger, BurgerMenu } from '../components/BurgerMenu';

// import "../styles/modalmenu.scss"
import '../styles/burgermenu.scss'
import vytalityLogo from '../images/vytality-logo.png'
import layoutStyles from "../styles/layout.module.scss";


const Header = ({menuActive, toggleMenu}) => (
  <div className={layoutStyles.header}>
    
    {/* <div className={layoutStyles.titleContainer}>
      <Link to='/'>
        <h1>Co-Caring</h1>
      </Link>
    </div> */}
    
    <MobileBurger menuActive={menuActive} toggleMenu={toggleMenu}/>
    <center>
    <div className={layoutStyles.navLinkContainer}>
      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/'
      >DASHBOARD</NavLink>

      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/resources'
      >RESOURCES</NavLink>

      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/about'
      >ABOUT US</NavLink>
        
      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/leadershipdashboard'
      >LEADERSHIP</NavLink>
  
      <NavLink exact className={layoutStyles.navLink} activeClassName={layoutStyles.navLinkActive}
        to = '/chat'
      >JOIN US</NavLink>
  


  
    </div>
    </center>
  </div>
)




const Footer = () => (
  <div className={layoutStyles.footer}>
    <img src={vytalityLogo} alt='Vytality logo'/>
    <p>
      <a href='mailto:info@vytality.co'>info@vytality.co</a>
       | 
      <a href='http://vytality.co'>vytality.co</a>
    </p>
    <p>© 2020 by Peakfoqus LLC</p>
  </div>
)



const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <>
      <Header menuActive={menuActive} toggleMenu={toggleMenu} />
      {/* margin between banner and first textSection is margin-bottom on .container topbanner.module.scss */}

      <BurgerMenu menuActive={menuActive} toggleMenu={toggleMenu} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

const ScrollToTop = ({history}) => {
  useEffect( () => {
    const unlisten = history.listen(() => {
      window.scrollTo(0,0);
    });
    return () => {
      unlisten();
    }
  }, []);
  return (null);
}

export const ScrollUp = withRouter(ScrollToTop)

export default Layout
