import React from 'react'
import '../styles/index.css'
// Picture import
import Rocket from '../assets/img/hero-img.svg'
import About from '../assets/img/about-img.svg'


//Icon
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

function index() {
  return (
    <div className='container-hero'>

          <div className="header-page">
              <div className="texting">

                <h1>Better digitals experience
                  <br/>with Ninestarts
                </h1>
                <p>We are team of talented designers making websites
                  with Yourself
                </p>
                <a className='btn'>Get started</a>
  
              </div>
              
              <div className="hero-img">
                <img src={Rocket}/>
              </div>
          </div>
          <div className="second-sector">
                
                <img src={About} className='move-picture'/>
                
                <div className="grouping-text">
                    
                  <div className="texing2">
                      <h1>Voluptatem dignissimos provident quasi</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      <br/> ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                  </div>
                    <div className="all-stagement">
                      <div className="stagement_1">
                        <ReceiptLongIcon className='custom-icon1'/>

                        <div className="texting2_1">

                            <h4>Corporis voluptates sit</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam 
                              <br/>quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        
                      </div>
                      <div className="stagement_2">
                        <ViewInArOutlinedIcon className='custom-icon1'/>

                        <div className="texting2_2">

                            <h4>Corporis voluptates sit</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam 
                              <br/>quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                      </div>
                      
                  </div>

                </div>
                
          </div>




    </div>
  )
}

export default index