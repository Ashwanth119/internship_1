import React from 'react'
import About from './About';
import { Outlet, useNavigate } from 'react-router-dom';
function Home() {

  const navigate=useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={()=>navigate('/about')}>About Us</button>
      <Outlet/>
    </>
  )
}

export default Home