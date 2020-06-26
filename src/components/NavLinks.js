import React, { Component } from 'react'
import '../css/NavLink.css'
// import $ from 'jquery'

import NavLinkItem from './NavLinkItem'

class NavLinks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pages: props.pages,
      currentPage: "Profile"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  //sets the active page
  handleClick(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    var navLinkItemSet = []
    // let pagesSet =[]
    for (let pageData of this.state.pages) {

      var pageIsActive = this.state.currentPage === pageData.page

      navLinkItemSet
        .push(<NavLinkItem
          page={pageData.page}
          active={pageIsActive}
          category={pageData.category}
          onClick={() => this.handleClick(pageData.page)}
          key={pageData.id}
        />)
    }
    return (
      <ul className="nav-items container">
        {navLinkItemSet}
      </ul>
    )
  }
}


export default NavLinks