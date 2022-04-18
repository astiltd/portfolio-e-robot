import React from 'react'

import './App.css'

import Navbar from './components/navbar/Navbar.js'
import Nav2 from './components/navbar/Nav2'
import Header from './components/header/Header.js'

const App = () => {
  return (
    <div>
        <Navbar />
        {/* <Nav2 /> */}
        <Header />
    </div>
  )
}

export default App