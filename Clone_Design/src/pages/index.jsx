import React, { useState } from 'react'
import '../styles/index.css'


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


            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Non consectetur a erat nam at lectus urna duis?</a></li>
                  <div className="detail-text">
                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id 
                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus 
                    magna fringilla urna porttitor rhoncus dolor purus non.</p>
                  </div>
            </div>
            
            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</a></li>
                <div className="detail-text">
                    <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. 
                    Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris 
                    ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                </div>
            </div>
            
            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</a></li>
                  <div className="detail-text">
                    <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
                       Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. 
                       Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie 
                       at elementum eu facilisis sed odio morbi quis</p>
                  </div>
            </div>
            
            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</a></li>
                  <div className="detail-text">
                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet 
                      id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque
                       elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                  </div>
            </div>

            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</a></li>
                  <div className="detail-text">
                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. 
                      Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. 
                      Purus gravida quis blandit turpis cursus in</p>
                  </div>
            </div>

            <div className="DropDown-text">
                <li>< KeyboardArrowDownIcon/><a>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</a></li>
                  <div className="detail-text">
                    <p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. 
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. 
                      Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                  </div>
            </div>
          
          </div>       


    </div>
  )
}

export default index