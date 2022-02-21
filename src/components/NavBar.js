// import react
import React from 'react'

export default function NavBar() {
  return (
    // these are components: containers for UI elements
    // this must be imported in App
    <div className='navbar'>
        <a href="#" className='navLinks'>Home</a>
        <a href="#" className='navLinks'>About</a>
        <a href="#" className='navLinks'>Projects</a>
        <a href="#" className='navLinks'>Contact</a>
    </div>
  )
}