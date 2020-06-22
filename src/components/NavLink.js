import React, { Fragment } from 'react'
import '../css/NavLink.css'

function NavLink({ title }) {

  return (
    <Fragment>
      {
        title.localeCompare("Profile") &&

        <li className="list-item">
          <a href="#" className="nav-link current-page">{title}</a>
        </li>
        ||
        < li className="list-item" >
          <a href="#" className="nav-link">{title}</a>
        </li >
      }
    </Fragment>
  )
}

export default NavLink