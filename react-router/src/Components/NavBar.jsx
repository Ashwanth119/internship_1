import React from 'react'
import {NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='authentication'>Authenticate</NavLink>
        <NavLink to='contact'>Contact</NavLink>
    </nav>
  )
}

export default NavBar;