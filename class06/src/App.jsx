import React from 'react'
import { useState } from 'react';

const App = () => {
  
  const [title, setTitle] = useState('');

  const [allUsers, setallUsers] = useState([]);


  const submitHandler = (e) =>{
    e.preventDefault();
    const newAllUsers = [...allUsers]

    newAllUsers.push(title);
    console.log(newAllUsers);

    setallUsers(newAllUsers);
    setTitle('');
  }



  return (
    <div>
      <form onSubmit={ (e) =>{
        submitHandler(e)
      }} >
        <input type='text'
         placeholder='Enter name'
         value={title}
         required
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
          ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App








