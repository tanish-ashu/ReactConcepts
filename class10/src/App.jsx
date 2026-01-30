import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {

  const [allPokemon, setallPokemon] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setallPokemon(response.data.results);

  }

  useEffect(function(){
    getData();
  }, [])

  return (
    < div >
    <button onClick={() => {
      getData();
    }}> Click me </button>
    
    {allPokemon.map(function (elem, idx) {
      return <h1 key={idx}>{elem.name}</h1>
    })}
    </div >
  )
}

export default App
