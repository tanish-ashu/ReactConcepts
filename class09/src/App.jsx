import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User';

const App = () => {

  const [allData, setallData] = useState([]);

  async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('waiting for pending to be resolved')
    setallData(response.data);
  }

  return (
    <div>
      <button onClick={() => {
        getData();
      }}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
              <User elem={elem}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
