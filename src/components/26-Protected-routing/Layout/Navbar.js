import React from 'react';

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>

        <Link to="/" className='nav-link' >Home</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/add-blog" className='nav-link'>Add Blog</Link>
        
    </nav>
  )
}

export default Navbar;