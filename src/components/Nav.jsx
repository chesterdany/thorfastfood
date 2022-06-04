import React from 'react'
import logo from "../images/logo.png"
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='div-logo' >
            <img src={logo} alt="logo" className='logo'/>
        </div>
        <span className='logo-name'>Thor</span>
    </div>
  )
}

export default Nav