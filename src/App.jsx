import './App.css'
import React from 'react'
import Header from './components/Header'
import {Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {


  return (
    <>
    <Router>
        <Header />
       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
       
      </Router>

      <Footer />
    </>
  )
}

export default App
