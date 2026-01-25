import React from 'react'

const Card = (props) => {

  return (
    <div className='lg:w-[23vw] md:w-[40vw] sm:w-[65vw] w-[63vw] bg-white text-black rounded-xl p-5 px-8  flex items-center flex-col text-center' >
      <img className='h-20 w-20 rounded-full' src='https://tse3.mm.bing.net/th/id/OIP.st8PlhwGeN63O3ki-5YmuAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'></img>
      <h1 className='text-2xl mt-2 font-bold'>{props.elem.userName}</h1>
      <h5 className='text- text-blue-500 text-lg font-semibold my-2'>{props. elem.userName}</h5>
      <h5 className='text-sm font-medium leading-tight'>{props.elem.userDesc}</h5>
      <button onClick={(elem)=>{
        props.deleteHandler(props.idx);
      }} className='px-4 py-2 bg-red-600 text-white text-xs cursor-pointer font-semibold mt-3 active:scale-95' >Remove</button>
    </div>
  )
}

export default Card
