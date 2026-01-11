import React from 'react'

const Button = () => {
  function btnClicked(){
    console.log('Button is Clicked!!!');
  }
  return (
    <div 
    onClick={()=>{
      btnClicked()
    }}
    className= 'active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2 w-fit ' >
      Click to Download
    </div>
  )
}

export default Button
