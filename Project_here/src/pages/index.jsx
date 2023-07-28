import React from 'react'
import '../styles/index.css'
// Picture import
import Rocket from '../assets/img/hero-img.svg'

function index() {
  return (
    <div className='container-hero'>

          <div className="header-page">
              <div className="texting">

                <h1>Better digitals experience
                  <br/>with Ninestarts
                </h1>
                <p>We are team of talented designers making websites
                  with <br/>Yourself
                </p>
                <a className='btn'>Get started</a>
  
              </div>
              
              <div className="hero-img">
                <img src={Rocket}/>
              </div>
          </div>




    </div>
  )
}

export default index