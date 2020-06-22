import React from 'react'

import NavLink from './NavLink'
import '../css/Nav.css'

function Nav() {
  //stores nav_link titles
  const nav_link_titles = ["Profile", "Experience", "Education", "Portfolio"]

  return (
    <nav className="nav-top">
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

export default Nav