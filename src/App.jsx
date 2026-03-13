//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import { BrowserRouter } from "react-router-dom"
import Navbar from "./examfolder/Navbar"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>

    </div>
  )
}

export default App;
