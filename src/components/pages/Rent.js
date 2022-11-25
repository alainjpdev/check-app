import React from 'react'
import rentMoke from "./mediaPages/rentmoke.mp4"
import "./Rent.css"








        // <div className="h-full flex justify-center flex-col">
       
    
        //   <div className=" w-2/3 m-auto p-8 shadow-lg">
        //     <h1 className="text-4xl font-bold flex items-center">
        //       <span>
                
        //       </span>
function Rent() {
    return (
      <>
     
        <div className='hero-container-rent'>
       <video src={rentMoke} width="100%"autoPlay loop muted controls/>
      
      
         <h1 className="text-4xl font-bold flex items-center">

              <br/>
              <div className='rent-container'>
              <span>RENT MOKE PER DAY</span>
              <br/>
          
              <br/>
              <div>
                <h2>2 HOURS 100 USD</h2>
                <br/>
                <a target="_blanck" className="greenButton" href="https://buy.stripe.com/5kA16V3PM40bcpy28e" >Rent Now</a>
              </div>
            
            <br/>

            <div>
              <h2>4-5 HOURS 170 USD</h2>
              <br/>
              <a  target="_blanck" className="greenButton" href="https://buy.stripe.com/3cseXLgCyaozfBK9AF" >Rent Now</a>
            
            </div>
            </div>
            
            
            <br/>
              <br/>
              <br/>
              <br/>
              </h1>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
    
          

              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
  
        </>
      );
}

export default Rent