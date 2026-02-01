import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

  const params = useParams();
  
  console.log(params);

  return (
    <div>
      <h1 className='text-5xl underline font-bold fixed left-[50vw] -translate-x-1/2' >
        Some Courses Page</h1>

    </div>
  )
}

export default AnyCourse
