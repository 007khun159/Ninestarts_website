import React, { useState } from 'react'
import '../styles/index.css'
import FaqAsk  from './faq'

// Picture import
import Rocket from '../assets/img/hero-img.svg'
import About from '../assets/img/about-img.svg'
import Portfolio1  from '../assets/img/portfolio/portfolio-1.jpg'
import Portfolio2  from '../assets/img/portfolio/portfolio-2.jpg'
import Portfolio3  from '../assets/img/portfolio/portfolio-3.jpg'
import Portfolio4  from '../assets/img/portfolio/portfolio-4.jpg'
import Portfolio5  from '../assets/img/portfolio/portfolio-5.jpg'
import Portfolio6  from '../assets/img/portfolio/portfolio-6.jpg'
import Portfolio7  from '../assets/img/portfolio/portfolio-7.jpg'
import Portfolio8  from '../assets/img/portfolio/portfolio-8.jpg'
import Portfolio9  from '../assets/img/portfolio/portfolio-9.jpg'

//Icon
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpeedIcon from '@mui/icons-material/Speed';
import PublicIcon from '@mui/icons-material/Public';
import { MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Select Protfolio
const portfolioItems = [
  { image: Portfolio1, category: 'App', title: 'App Project1' },
  { image: Portfolio2, category: 'Web', title: 'Card Project1' },
  { image: Portfolio3, category: 'App', title: 'Card Project2 '},
  { image: Portfolio4, category: 'App', title: 'App Project3' },
  { image: Portfolio5, category: 'Web', title: 'Card Project2' },
  { image: Portfolio6, category: 'Web', title: 'Card Project3' },
  { image: Portfolio7, category: 'Card', title: 'Card Project2' },
  { image: Portfolio8, category: 'Card', title: 'Card Project3' },
  { image: Portfolio9, category: 'Card', title: 'Card Project3' },

]


function index() {
  
  // Function all 
  const [activeCategory , setActiveCategory] = useState('All');

  const handleNavClick = (category) => {
    setActiveCategory(category);
  };



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
        <div className="third-section">

            <div className="texing-detail">
                  <h2>Services</h2>
                  <h1>Check out the great service we offer</h1>
            </div>

            <div className="box-service">
              
              <div className="box1">
                  <SportsBasketballIcon className='icon1'/>
                  <h4>Lorem Ipsum</h4>
                  <p>Voluptatum deleniti atque corrupti
                     quos dolores et quas molestias 
                     excepturi sint occaecati cupiditate
                  </p>
              </div>

              <div className="box1">
                  <AssignmentIcon  className='icon1'/>
                  <h4>Sed ut perspiciatis</h4>
                  <p>Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu 
                    fugiat nulla
                  </p>
              </div>

              <div className="box1">
                  <SpeedIcon  className='icon1'/>
                  <h4>Magni Dolores</h4>
                  <p>Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia 
                    deserunt mollit anim
                  </p>
              </div>

              <div className="box1">
                  <PublicIcon  className='icon1'/>
                  <h4>Nemo Enim</h4>
                  <p>At vero eos et accusamus et iusto odio 
                    dignissimos ducimus qui blanditiis 
                   praesentium voluptatum
                  </p>
              </div>




            </div>

        </div>
        <div className="fourth-section">

          <div className="detail-text">
              <h2>Portfolio</h2>
              <h1>Check out our beautiful portfolio</h1>
          </div>
          <div className="nav-bar-4">
              <nav className='nav-select'>
                  <ul>
                    <li><a onClick={()=> handleNavClick('All')}>All</a></li>
                    <li><a onClick={()=> handleNavClick('App')}>App</a></li>
                    <li><a onClick={()=> handleNavClick('Card')}>Card</a></li>
                    <li><a onClick={()=> handleNavClick('Web')}>Web</a></li>
                  </ul>
              </nav>
          </div>

          <div className='portfolio-objects'>
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`portfolio_class ${activeCategory === 'All' || item.category === activeCategory ? 'show' : 'hidden'}`}
              >
                {(activeCategory === 'All' || activeCategory === item.category) && (
                 <div className={`portfolio_class ${activeCategory === 'All' || item.category === activeCategory ? 'show' : 'hidden'}`}>
                    <img src={item.image} alt={item.title} className='image_texting'/>
                    <div className='detail-links'></div>
                    <div className='detail-information'></div>
                  </div>
                )}
              </div>
            ))}
          </div>        
        </div> 

        <div className="fifth-section">
          
          <div className="text-detail">
            <h4>F.A.Q</h4>
            <h2>Frequentlly Asked Questions</h2>    
          </div>
              
        </div>       
            <FaqAsk/>

    </div>
  )
}

export default index