import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <h2> Courses Page</h2>

      <Outlet/>
    </div>
  )
}

export default Courses
