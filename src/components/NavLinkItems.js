import React from 'react'
import NavLinkItem from './NavLinkItem'

const NavLinkItems = () => {
  //stores nav_link titles
  const pageTitles = ["Profile", "Experience", "Education", "Portfolio"]

  const navLinkItems = pageTitles.map((title, index) => <NavLinkItem title={title} key={index} />)
  return (
    navLinkItems
  )
}

export default NavLinkItems