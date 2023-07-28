import React from 'react'
import '../styles/navbar.css'

function navbar() {
  return (
    <div className='container-navbar'>
        <nav>
            <div className="logo">
                <span>Ninestars</span>
            </div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Drop Down</a></li>
                <li><a href='#'>Contact</a></li>

                <div className="button-get">
                <a className='btn' href='#'>Get Started</a>
                </div>
            </ul>

           


        </nav>

    </div>
  )
}

export default navbar