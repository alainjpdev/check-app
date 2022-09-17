import React from 'react';
import "./SpecialEdtions.css"

import specialImg from "./mediaPages/60.png"
import videoSpecial from "./mediaPages/Moke_60_Anniversary_16x9_video.mp4"
 

export default function SpecialEditions() {

  return <>
  <div className="title">
  <p>Home  >>  Cars  >>  60 Years of Bond Moke Edition 2022</p>
  </div>
    <div className="image-container">
    <img src={specialImg} 
    className='img' alt='cualquier cosa'/>
    <div className='strong'> <strong>YEARS OF BOND</strong> </div>
    </div>
    
    <h3 className='text-container'>Inspired by 60 years of James Bond, this limited edition Moke pays homage to 007’s iconic history. Discover this
       thrilling new ride, our second collaboration with 007.</h3>
       <div className="videoWrapper">
      <video src={videoSpecial} width="100%"autoPlay loop muted controls/>
      </div>

      <h3 className='text-container'>Celebrate 60 years of James Bond movies! Moke America`s latest collaboration with EON Productions and 007 is a love letter to the James Bond film canon. The Moke has appeared in four 007 films: You Only Live Twice (1967), Live And Let Die (1973), The Spy Who Loved Me (1977) and Moonraker (1979). This limited edition 007 Moke features a midnight blue exterior, “Mango Tree” wooden dashboard, 
      sequence dots tire cover, wood steering wheel, wood gear shift knob and many more unique options.</h3>
 
      <div className="container-se">
          <div className="features">
              <h2>Features</h2>
              <br/>
              <li>Distinctive James Bond design, complete with 60th anniversary
                 007 logo, “Mango Tree” dashboard and sequence dots artwork” artwork.</li>
                 <br/>
                 <h2>Elevated Design</h2>
                 <br/>
                     <ul>
                        <li>-Midnight Blue body</li>
                        <li>-Wood steering wheel</li> 
                        <li>-Elegant wooden gear shift</li> 
                        <li>-“Mango Tree” wrapped dashboard</li>
                        <li>-Tire cover featuring unique sequence dots artwork</li>
                      </ul>
                      <br/> 
                      <h2>007 Style</h2>
                      <br/>
                     <ul>
                        <li>-Electric technology</li>
                        <li>-Tan seats</li> 
                        <li>-Tan Bimini Top</li> 
                        <li>-Backup camera</li>
                        <li>-Bluetooth radio</li>
                        <li>-Blackout rims</li>
                      </ul> 
          </div>
          <div className="add-cart-container">
          <img src={specialImg} 
    className='img-small' alt='cualquier cosa'/>
    <br/>
            <h2><strong>Years of Bond Moke</strong> </h2>
            <br/>
            <h4>$29,975.00</h4>
            <br/>
             <h4>We have reimagined the classic Moke James Bond drove in four 007 movies. This limited
 edition electric cruiser includes exclusive 007 features.</h4>
 <div className="btn-add-cart-007">ADD TO CART</div>
          </div>
          <div className="movies-image-container">
            <img src='./images/jamesBondMovies/Live_and_Let_Die_-_01_1024x1024.png' 
                      className='img-movie' alt='cualquier cosa'/>
              <img src='./images/jamesBondMovies/Moonraker_-_01_1024x1024.png' 
                      className='img-movie' alt='cualquier cosa'/>
              <img src='./images/jamesBondMovies/4.webp' 
                      className='img-movie' alt='cualquier cosa4'/>
              <img src='./images/jamesBondMovies/The_Spy_Who_Loved_Me_-_01_1024x1024.webp' 
                      className='img-movie' alt='cualquier cosa'/>
          </div>

      </div>
    
  </>
}
