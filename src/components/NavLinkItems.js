import React from 'react'
import NavLinkItem from './NavLinkItem'

const NavLinkItems = () => {
  //stores nav_link titles
  const pageTitles = ["Profile", "Experience", "Education", "Portfolio"]
  
  return (
    pageTitles.map(title => <NavLinkItem title={title} />
    )
  )
}

export default NavLinkItems