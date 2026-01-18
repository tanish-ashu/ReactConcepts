import React from 'react'
import { useState } from 'react';
// lets make a game using random name api , change king and queen maching name clicking button to make match
const App = () => {

  let a = 0

  const [num, setNum] = useState(0);
  const [king, setking] = useState('Tanishk');

  const btnClick = ()=>{
    setking('Ashu')
  }

  return (
    <div >
      <h1>{king}</h1>
      <button onClick={()=>{
        btnClick();
        console.log("button Clicked");
      }}> Increase </button>
    </div>
  )
}

export default App
