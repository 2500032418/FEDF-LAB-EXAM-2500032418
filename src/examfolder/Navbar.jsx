import React from 'react'
import NotFound from './NotFound'
import ApiDemo from './ApiDemo'
import UsersList from './UsersList'
import Registration from './Registration'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <div>
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/register">Add Department</Link> 
      <Link to="/users">View Department</Link>
      <Link to="/api">ApiDemo</Link> 
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/users" element={<UsersList/>} />
        <Route path="/api" element={<ApiDemo/>} />
        <Route path="/nofound" element={<NotFound/>}/>
      </Routes>
    
    </div>
  )
}
