import React from 'react'
import "../App.css"
import "./HeroSection.css"
import { Link } from "react-router-dom"
import redMoke from "../images/1.1.png"
import militarMoke from "../images/2.png"
import rainbowMoke from "../images/3.png"
import yellowMoke from "../images/4.png"
import otherMoke from "../images/5.png"
import videoAd from "../videos/ma.mp4"






function HeroSection(props) {
  return (
    <>
  
   
    <div className='hero-container'>
     

      <img src={ redMoke} alt="red-moke" width={500} to="/" className='responsive-car'key={"car1"}/>
 
      <div className="top-left">
        <h4>TAKE IT FOR A SPIN!</h4>
        <h2 className='360moke'>#360 MOKE</h2>
        </div>

      <div className='hero-btns'>

        
        </div>
      </div>
      <div className='split'>
          <h1><strong>CUSTOMIZE YOUR MOKE TODAY!</strong></h1>
          
          {/* <div className="botton-container" onClick={ window.location.href='/shop'}> */}
          <div className="botton-container">
                 
               <Link to="/shop" className='redButton'>BUILD YOURS</Link>
          

          </div>         
      </div>
      
      <div className="image-militar-container">
      <img src={ militarMoke} alt="militar" className='responsive'></img>
     
      {/* <Link to="/"><div className="botton-left">CUSTOMIZE</div></Link>
       <Route path="/shop" exact component={Shop}/> */}
      
      </div>
      <img src={ rainbowMoke } alt="rain-Moke" className='responsive'></img>
      <img src={ yellowMoke} alt="yellow-Moke" className="responsive"></img>
      <img src={otherMoke} alt="rainbow" className="responsive"></img>
      <div className="videoWrapper">
      <video src={videoAd} width="100%"autoPlay loop muted controls/>
      </div>
    
    
    </>
  );
}

export default HeroSection