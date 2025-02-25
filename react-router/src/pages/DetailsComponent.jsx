import React from 'react'
import { Outlet } from 'react-router-dom'

const DetailsComponent = () => {
  return (
    <div>
        <p>Details Component</p>
        <Outlet />
    </div>
  )
}

export default DetailsComponent