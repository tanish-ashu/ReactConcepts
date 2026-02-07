import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home/>}></Route>
          <Route path='/about' element={ <About/>}></Route>
          <Route path='/courses' element={ <Courses/>}></Route>
      </Routes>
    </div>
  )
}

export default App
