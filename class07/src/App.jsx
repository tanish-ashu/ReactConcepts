import React from 'react'
import { useState } from 'react';
import Card from './components/card';

const App = () => {

  const [userName, setuserName] = useState(''); // created hook for storing individual inputs
  const [userRole, setuserRole] = useState('');
  const [imageURL, setimageURL] = useState('');
  const [userDesc, setuserDesc] = useState('');

  const [allUser, setAllUser] = useState([]);  // created a hook for single allUsersObject

  const submitHandler = (e) => {  // what to do on submit
    e.preventDefault();  // prevent reload

    const oldUsers = [...allUser]
    oldUsers.push({ userName, userRole, userDesc, imageURL })
    console.log(oldUsers);

    setAllUser(oldUsers);    // adding stuffs on all users 

    setuserName('')  // cleaning input area
    setuserDesc('')
    setimageURL('')
    setuserRole('')
  }
  
  const deleteHandler = (idx)=>{
   const copyUser = [...allUser];
   copyUser.splice(idx,1);
   setAllUser(copyUser);
  }


  return (
    <div className='h-screen bg-black text-white ' >
      {/* Making the form in component , with its dynamic js values */}
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='px-2 p-10 flex flex-wrap justify-center' >
        <input
          value={userName}  // setting hook variable value
          onChange={(e) => {
            setuserName(e.target.value);  // updating hook
          }}
          className='border-2 px-5 text-xl font-semibold py-2 rounded m-2 lg:w-[48%]'
          type='text'
          placeholder='Enter your name'></input>


        <input
          value={userRole}
          onChange={(e) => {
            setuserRole(e.target.value);
          }}
          className='border-2 px-5 text-xl font-semibold py-2 rounded m-2 lg:w-[48%]'
          type='text'
          placeholder='Image URL'></input>


        <input
          value={imageURL}
          onChange={(e) => {
            setimageURL(e.target.value);
          }}
          className='border-2 px-5 text-xl font-semibold py-2 rounded m-2 lg:w-[48%]'
          type='text'
          placeholder='Enter Role'></input>


        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value);
          }}
          className='border-2 px-5 text-xl font-semibold py-2 rounded m-2 lg:w-[48%]'
          type='text'
          placeholder='Enter Description'></input>
        <button className='px-5 py-2 active:scale-95 bg-emerald-600 rounded m-2 w-[97%] '>Create User</button>
      </form>
      <div className='px-2 p-10 gap-4 flex flex-wrap '>
        {allUser.map(function (elem, idx) {  // Using all users to create Card of each  // MAKING A COMPONENT DIV/CARD USING THAT OBJECT'S EACH VALUE. 
          return <Card idx={idx} key={idx} elem={elem} deleteHandler={deleteHandler}  />
        })}
      </div  >

    </div>
  )
}

export default App
