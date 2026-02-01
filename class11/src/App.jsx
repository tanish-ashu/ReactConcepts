import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import AnyCourse from './pages/AnyCourse'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/men' element={<Men />} />

        <Route path='/courses/:id' element={<AnyCourse/>} />
      </Routes>

    </div>
  )
}

export default App
