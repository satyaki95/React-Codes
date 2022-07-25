import React from 'react'

import {  NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
    <NavLink to="/home" className="nav-link">Home</NavLink>

    <NavLink to="/contact" className="nav-link">Contact</NavLink>

    <NavLink to="/blog" className="nav-link">Blogs</NavLink>
  </nav>
  )
}

export default Nav;


// <ul>
//     <a href='/home'>Home</a> <br />
//     <a href='/contact'>Contact</a> <br />
//     <a href='/blog'>Blogs</a>
//     </ul>