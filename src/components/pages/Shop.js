import React, { useState } from 'react';
import CarCustom from '../CarCustom';
import Cart from './Cart';
import "./Shop.css";

export default function Shop() {

  const [isLoggedIn, setIsLoggedIn ] = useState(true)

if(isLoggedIn){
  return <>
  <div className="shop-container">
    <div className="section-title">
        <h1 itemprop="name">Build Your eMoke</h1>
    </div>
    <div className="container">
        <div className="canvas-section">
            <CarCustom setIsLoggedIn={setIsLoggedIn}/>

        </div>
    </div>

  </div>
</>
} else {
  return <Cart/>
}
  

  
    
  
}
