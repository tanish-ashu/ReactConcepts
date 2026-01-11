import React from 'react'

const Navbar = (props) => {
  
  return (
    <div style={{backgroundColor:props.color }} className=' text-xl bg-pink-700 text-white px-8  py-3 flex items-center  justify-between' >
      <h2>{props.text}</h2>
      <div className='flex gap-10' >
            {props.links.map(function(elem, idx){
              return <h1 key={idx} >{elem}</h1>
            })
          }

      </div>
    </div>
  )
}

export default Navbar
