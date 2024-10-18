import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './assets/logo.png'

function Header(currentPage) {
  return (
    <>
      <div className="Header">
        <div className="HeaderTitleCard">
          <img src={Logo} className="HeaderLogo" alt='AI Horde Image & Text Generator Logo'/>
          <div className="HeaderTitle">AI Horde - Image & Text Generator</div>
        </div>
        <div className="HeaderMenu">
          <div className={currentPage.currentPage === 'Create' ? 'HeaderMenuItemSelected' : 'HeaderMenuItem'}><Link to="/">Create</Link></div>
          <div className={currentPage.currentPage === 'Gallery' ? 'HeaderMenuItemSelected' : 'HeaderMenuItem'}>Gallery</div>
          <div className={currentPage.currentPage === 'Settings' ? 'HeaderMenuItemSelected' : 'HeaderMenuItem'}>Settings</div>
          <div className={currentPage.currentPage === 'About' ? 'HeaderMenuItemSelected' : 'HeaderMenuItem'}><Link to="/about">About</Link></div>
        </div>
      </div>
    </>
  )
}

export default Header
