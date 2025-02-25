import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeComponent = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>HomeComponent</p>
      <button onClick={()=>navigate("/about")}>Navigate to About</button>
      <Outlet/>
    </div>
  )
}

export default HomeComponent