import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'

function Authentication() {
  return (
    <>
        <div>Login or Register to continue</div>
        <div><NavLink to='login'>Login</NavLink></div>
        <div><NavLink to='register'>Register</NavLink></div>        
        <Outlet />
    </>
    
  )
}

export default Authentication