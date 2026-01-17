import React from 'react'
import { useState } from 'react';

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('Form Submitted');
    setName('');
  }

  const [name, setName] = useState('');

  return (
    <div>
      <form onSubmit={ (e) =>{
        submitHandler(e)
      }} >
        <input type='text'
         placeholder='Enter name'
         value={name}
         onChange={(e)=>{
          console.log(e.target.value);
          setName(e.target.value);
         }}
          ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App








