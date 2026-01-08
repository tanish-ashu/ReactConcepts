import React from 'react'

const Button = (props) => {
  console.log(props);
  return (
    <div className='w-fit bg-emerald-600 px-4 py-2 rounded m-2 text-shadow-violet-50 font-bold' >
      {props.text}
    </div>
  )
}

export default Button
