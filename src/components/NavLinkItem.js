import React from 'react'

const NavLinkItem = ({ page, active, onClick, category }) => {

  return (
    <li className={"list-item"} >
      <a href="#"
        className={active ? "current-page" : ""}
        onClick={onClick}
      >
        {page}
      </a>
    </li >
  )
}

export default NavLinkItem