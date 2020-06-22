import React from 'react'

import NavLink from './NavLink'
import '../css/NavBar.css'

function NavBar() {
  //stores nav_link titles
  const nav_link_titles = ["Profile", "Experience", "Education", "Portfolio"]

  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        {
          nav_link_titles.map((title, index) =>
            <NavLink key={index} title={title} />
          )
        }
      </ul>
    </nav>
  )
}

export default NavBar