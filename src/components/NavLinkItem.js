import React, { Component } from 'react'

class NavLinkItem extends Component {
  constructor (props) {
    super(props)
  }
  handleClick() {
  }
  render() {
    return (
      <li className={"list-item"} >
        <a href="#"
          className="nav-link"
          key={this.props.key}
        >
          {this.props.title}
        </a>
      </li >
    )
  }
}

export default NavLinkItem