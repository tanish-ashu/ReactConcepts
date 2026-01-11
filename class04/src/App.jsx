import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'
import Button from './components/Button'

const App = () => {

  const user1 = {
    name: 'Tanishk',
    age: 30,
    gender: 'male',
  }
  
  const user2 = {
    name: 'Abhishek',
    age: 40,
    gender: 'female',
  }
  
  const user3 = {
    name: 'Tanuj',
    age: 20,
    gender: 'male',
  }

  return (
    <div>
      <Navbar text='Tanishk' color='red' links={['Home', 'About', 'Account', 'Contacts']}  />
      <br/>
      <Navbar text='Abhishek' color='green' links={['Home', 'Services', 'Courses', 'Contacts' ,'Exit']}/>
      <br/>
      <Navbar text='Tanuj' color='blue' links={['Home', 'Product', 'Men', 'Women']}/>
      <br/>
      <Navbar text='Apple' color='black' links={['Apple', 'Mac', 'IPad', 'Store']}/>
      <br/>
      <Men/>
      <Women/>

      {user1.gender == 'male' ? user3.age>10 ? <Men/> : <Women/> : <Women/>}

      <Button/>

    </div>
  )
}

export default App
