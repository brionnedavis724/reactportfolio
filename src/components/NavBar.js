// import react
import React from 'react'

export default function NavBar() {
  return (
    // these are components: containers for UI elements
    // this must be imported in App
    <div className='navbar'>
        <a href="#" className='navLinks'>Home</a>
        <a href="#" className='navLinks'>About</a>
        <a href="#" onclick="openProjects()" className='navLinks'>Projects</a>
        <a href="#" className='navLinks'>Contact</a>
        
        {/*<a href="#" onclick="darkModeProps()">Dark Mode</a> */}
    
        {/* function openProjects() {
            window.location = "Projects.js"
        } */}
    </div>
  )
}