import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const navstyle = {
        display:'flex',
        justifyContent:'space-between',
        background:'white',
        width:'100%',
        fontSize:'10px',
    }
  return (
    <div style={navstyle}>
        <Link to={'/'}>
            <h1 >Kalvium❤️</h1>
        </Link>

      <div style={{display:'flex', justifyContent:'space-between'}}>
        
        <Link to={"/about"}><h1>About</h1></Link>
        <Link to={"/contact"}><h1>Contact</h1></Link>
        <Link to={"/content"}><h1>Content</h1></Link>
        <Link to={"/login"}><h1>Login</h1></Link>
        
      </div>
    </div>
  )
}
