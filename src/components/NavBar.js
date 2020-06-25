import React from 'react'
// import $ from 'jquery'

import NavLinks from './NavLinks'

import '../css/NavBar.css'

const NavBar = () => {
  const pages = [
    {
      id: '001',
      page: 'Profile',
      category: 'profile'
    },
    {
      id: '002',
      page: 'Experience',
      category: 'experience'
    },
    {
      id: '003',
      page: 'Education',
      category: 'education'
    },
    {
      id: '004',
      page: 'Portfolio',
      category: 'portfolio'
    }
  ]
  return (
    <nav className="nav-bar">
      <NavLinks pages={pages} />
    </nav>
  )
}

export default NavBar