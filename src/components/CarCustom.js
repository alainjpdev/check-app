import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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
import useLocalStorage from '../hooks/useLocalStorage';
import Cart from './pages/Cart';

import { useNavigate } from "react-router-dom";




const arrBumper = ["black"];
const arrRollbar = ["black"];
const arrBody = ["black"];
const arrGrill = ["black"];
const arrShopping = [];

        
const lastBody = []
const lastGrill = []
const lastRollbar = []
const lastBumper = []

const arrtest = []

function CarCustom(setIsLoggedIn) {

  const navigate = useNavigate();

     const afterClickBody = (e) =>{
    setBody(e.target.id)
    arrBody.push(e.target.id)
    //  console.log(arrBody)
    arrtest.push(arrBody)
    }

    const afterClickGrill = (e) =>{    
      setGrill(e.target.id)
      arrGrill.push(e.target.id)  
      // console.log(arrGrill)  
      arrtest.push(arrGrill)
      }
    const afterClickRollbar = (e) =>{
   
          if(e.target.id === "camo"){
            e.target.id = "black"
          } else {
            setRollbar(e.target.id)
          }
          arrRollbar.push(e.target.id)
          // console.log(arrRollbar)
          arrtest.push(arrRollbar)
        }

        
    const afterClickBumper = (e) =>{     
        setBumper(e.target.id)
        arrBumper.push(e.target.id);
        arrtest.push(arrBumper)
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

    // const redirect = (e) =>{
    //   <Cart/>
    // }


    const shopAction = (e) => {
        
        const lastBody = arrBody[arrBody.length-1]
        const lastGrill = arrGrill[arrGrill.length-1]
        const lastRollbar = arrRollbar[arrRollbar.length-1]
        const lastBumper = arrBumper[arrBumper.length-1]
     
          localStorage.removeItem("carrito2")
          arrShopping.length = 0
          arrShopping.push(lastBody,lastGrill,lastRollbar,lastBumper,rim,seat,top,steering,stereo,charger,cover) 
          localStorage.setItem("carrito2", JSON.stringify(arrShopping))
          // setValue(arrShopping)
          // setShopping(arrShopping)
        // setShopCart([lastBody,lastGrill, lastRollbar, lastBumper, rim,seat,top,steering,stereo,charger,cover])  
     

        
        // console.log(shopCart)    
           
    }
  


  
    

    // const [value, setValue ] = useLocalStorage("carrito2", "")
    
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
    
    const [ stereo, setStereo ] = useState(Boolean) 

    const [ charger, setCharger ] = useState(Boolean)

    const [ cover, setCover ] = useState(Boolean)

    const [ shopCart, setShopCart ] = useState([])
    

    // console.log(typeof(rim))

   

    // CarCustom.propTypes = {
    //   rim: PropTypes.number.isRequired
    // };
 
//     const toRender = ""
// const checkerCondition = (e) =>{
//   if(rim === typeof(Number)){
//     toRender =  <Link to="/cart" className='btn-add-cart' onClick={shopAction}>ADD TO CART</Link>
// } else {
//   toRender = <Link to="/shop" className='btn-add-cart' onClick={shopAction}>ADD TO CART</Link>
// }


// }
   
// arrShopping.push(lastBody,lastGrill,lastRollbar,lastBumper,rim,seat,top,steering,stereo,charger,cover) 





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


     {/* <div className="border-rims">
        <div className="container-title">RIMS {rim}</div>
        
        <Rims
        chooseRim={rim => setRim(rim)}/>
     </div>
   */}

     {/* <div className="border-seats">
     <div className="container-title">SEATS { seat }</div>
     
     <Seats
      chooseSeat={seat => setSeat(seat)}/>
     </div> */}

     {/* <div className="border-top">
     <div className="container-title">What kind of Top { top}</div>
     
     <Tops
     chooseTop={top => setTop(top)}/>
     </div> */}

     {/* <div className="border-top">
     <div className="container-title">STEERING WHEEL { steering }</div>
     
     <Steering
      chooseSteering={steering => setSteering(steering)}/>
     </div> */}

     {/* <div className="border-top">
    

     <Stereo
     stereo={stereo }
     isIt={setStereo}/>BLUETOOTH STEREO + $500.00
     </div>

     <div className="border-top">
    

     <Charger
     charger={charger}
     isIt={setCharger}/>HIGH PERFORMANCE CHARGER + $995
     </div>

     <div className="border-top">
    

     <Cover
     cover={cover}
     isIt={setCover}
     /> ALL WEATHER CAR COVER + $650.00
     </div> */}


      <Link to="/cart" className='greenButton' target="_blank" onClick={shopAction}>ADD TO CART</Link>

      {/* <button className='btn-add-cart' onClick={checkerCondition}>ADD TO CART</button> */}
      {/* <button className='btn-add-cart' onClick={redirect}>ADD TO CART</button> */}
      {/* <button onClick={() => navigate("/cart")}>go cart</button> */}
  </div>
    </>
  )
  
}

export default CarCustom