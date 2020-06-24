import React, { Component } from 'react'
import '../css/NavLink.css'
// import $ from 'jquery'

import NavLinkItems from './NavLinkItems'

class NavLinks extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return (
      <ul className="nav-items">
        <NavLinkItems />
      </ul>
    )
  }
}

export default NavLinks