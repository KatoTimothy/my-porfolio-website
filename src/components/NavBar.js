import React from 'react'
// import $ from 'jquery'

import NavLinks from './NavLinks'

import '../css/NavBar.css'

const NavBar = () => {

  return (
    <nav className="nav-bar">
      <NavLinks />
    </nav>
  )
}

export default NavBar