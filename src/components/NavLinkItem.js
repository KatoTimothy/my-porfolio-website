import React, { Component } from 'react'

class NavLinkItem extends Component {

  render() {
    return (
      <li className={"list-item"} >
        <a href="#"
          className="nav-link"
        >
          {this.props.title}
        </a>
      </li >
    )
  }
}

export default NavLinkItem