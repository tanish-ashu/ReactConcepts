import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card2';
import Button from './components/Button';

const App = () => {

  const age = 22;
  const user = "injection of js in component";

  const user2 = ['Tanishk', 'Abhishek', 'Tanuj', 'Chandrabhan', 'Adtiya'];

  return (
    <div>
      <Card />

      <h1>user = {user}, age = {age}</h1>

      <Card2 user ='Tanishk' age='20' />
      <Card2 user ='Abhishek' age='21' />

      <Button text='Add to Cart' />
      <Button text='Buy' />


      <div className='ps h-screen text-white bg-amber-300 ' >
          {user2.map(function(elem) {
            return <Button text={elem} />
          }) }
      </div>

    </div>
  )
}

export default App
