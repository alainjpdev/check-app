import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import { ColorsData } from './BodyColors';
import Car from './Car';
import "./CarCustom.css"
import Charger from './Charger';
import Cover from './Cover';





import Rims from './Rims';
import Seats from './Seats';
import Steering from './Steering';
import Stereo from './Stereo';
import Tops from './Tops';

import storeItems from "./data/items.json"

const arrBumper = ["bumper black"];
const arrRollbar = ["rollbar black"];
const arrBody = ["body black"];
const arrGrill = ["grill black"];
const arrShopping = [];

function CarCustom(setIsLoggedIn) {

     const afterClickBody = (e) =>{
    setBody(e.target.id)
    arrBody.push(e.target.id)
     console.log(arrBody)
    }

    const afterClickGrill = (e) =>{    
      setGrill(e.target.id)
      arrGrill.push(e.target.id)  
      // console.log(arrGrill)  
      }
    const afterClickRollbar = (e) =>{
   
          if(e.target.id === "camo"){
            e.target.id = "black"
          } else {
            setRollbar(e.target.id)
          }
          arrRollbar.push(e.target.id)
          // console.log(arrRollbar)
        }

        
    const afterClickBumper = (e) =>{     
        setBumper(e.target.id)
        arrBumper.push(e.target.id);
        // console.log(arrBumper)  
    }

    const myPartFunc = () => {
      if(myPart.toUpperCase()==="BODY"){
        return <>
        <p >{myPart.toUpperCase()}</p>
        </>
      }else if(myPart.toUpperCase()==="GRILL"){
        return <>
        <p >{myPart.toUpperCase()}</p>
        </>
      }else if(myPart.toUpperCase()==="ROLLBAR"){
        return <>
        <p >{myPart.toUpperCase()}</p>
        </>
      }else if(myPart.toUpperCase()==="BUMPER"){
        return <>
        <p >{myPart.toUpperCase()}</p>
        </>
      }
      
    }

    const shopAction = (e) => {
        
        const lastBody = arrBody[arrBody.length-1]
        const lastGrill = arrGrill[arrGrill.length-1]
        const lastRollbar = arrRollbar[arrRollbar.length-1]
        const lastBumper = arrBumper[arrBumper.length-1]
        
        // setShopCart([lastBody,lastGrill, lastRollbar, lastBumper, rim,seat,top,steering,stereo,charger,cover])  
        localStorage.clear()
        arrShopping.length = 0
        arrShopping.push(lastBody,lastGrill,lastRollbar,lastBumper,rim,seat,top,steering,stereo,charger,cover) 
        localStorage.setItem("carrito", arrShopping)
     

        
        // console.log(shopCart)    
           
    }
    
    const parts = ["body", "grill", "rollbar", "bumper"];

    const [ myPart, setMyPart ] = useState("")
    
    const [ body, setBody ] = useState("black")

    const [ grill, setGrill ] = useState("black")

    const [ rollbar, setRollbar ] = useState("black")

    const [ bumper, setBumper ] = useState("black")

    const [ rim, setRim ] = useState("")

    const [ seat, setSeat ] = useState("")

    const [ top, setTop ] = useState("")

    const [ steering, setSteering ] = useState("")
    
    const [ stereo, setStereo ] = useState("") 

    const [ charger, setCharger ] = useState(Boolean)

    const [ cover, setCover ] = useState(Boolean)

    const [ shopCart, setShopCart ] = useState([])
    

 
    

    
  return (
  <>
    <div className="container">

      <div className="container-image">
    
          <Car 
          body={body} 
          grill={grill} 
          rollbar={rollbar} 
          bumper={ bumper }/>
  
      </div>
      
      <div className="border-colors">
            
        <div className='container-title'>
        
                    <h2>Select a part of your MOKE</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {parts.map(part => (
                            <button
                                type="button"
                                key={part}
                                className={"btn btn-light border-dark bg-gray"}
                                onClick={() => setMyPart(part)
                                
                            }
                            >
                                {part.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myPartFunc()}</p>

                    <div>
                    {myPart === "bumper" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+"bumper"}
                                        id={color.color} 
                                       
                                        onClick={afterClickBumper}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        {myPart === "body" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+ "body"}
                                        id={color.color} 
                                       
                                        onClick={afterClickBody}
                                        style={{background : color.background}}>
                                      
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        {myPart === "grill" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+"grill"}
                                        id={color.color} 
                                       
                                        onClick={afterClickGrill}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        {myPart === "rollbar" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+"rollbar"}
                                        id={color.color} 
                                       
                                        onClick={afterClickRollbar}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        
                    </div>


                </div>
        </div>


     <div className="border-rims">
        <div className="container-title">RIMS {rim}</div>
        
        <Rims
        chooseRim={rim => setRim(rim)}/>
     </div>
  

     <div className="border-seats">
     <div className="container-title">SEATS { seat }</div>
     
     <Seats
      chooseSeat={seat => setSeat(seat)}/>
     </div>

     <div className="border-top">
     <div className="container-title">What kind of Top { top}</div>
     
     <Tops
     chooseTop={top => setTop(top)}/>
     </div>

     <div className="border-top">
     <div className="container-title">STEERING WHEEL { steering }</div>
     
     <Steering
      chooseSteering={steering => setSteering(steering)}/>
     </div>

     <div className="border-top">
     {/* <div className="container-title"></div> */}

     <Stereo
     stereo={stereo }
     isIt={setStereo}/>BLUETOOTH STEREO + $500.00
     </div>

     <div className="border-top">
     {/* <div className="container-title"></div> */}

     <Charger
     charger={charger}
     isIt={setCharger}/>HIGH PERFORMANCE CHARGER + $995
     </div>

     <div className="border-top">
     {/* <div className="container-title"></div> */}

     <Cover
     cover={cover}
     isIt={setCover}
     /> ALL WEATHER CAR COVER + $650.00
     </div>

     {/* <div className="btn-add-cart" onClick={shopAction}>
      <Link to="/cart" className='redButton'></Link>ADD TO CARTO LINK</div> */}

      {/* <div className="" > */}
      <Link to="/cart" className='btn-add-cart' onClick={shopAction}>ADD TO CART</Link>
      {/* </div> */}
             

  </div>
    </>
  )
  
}

export default CarCustom