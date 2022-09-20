import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Car from '../Car';
import "./Cart.css";
import storeItems from "../data/items.json"
import useLocalStorage from '../../hooks/useLocalStorage';

function getSavedValue(key){
  const savedValue = localStorage.getItem(key)
  if(savedValue) return savedValue
}


function Cart() {

 
// const carrito = getSavedValue("carrito")
// console.log(carrito)
  // const [value, setValue ] = useLocalStorage("carrito")
  // const [ carrito, setCarrito ] = useState("")
 
// const carrito = ""
  // useEffect(() => {
  //   if(carrito !== undefined && carrito.length === 0){
  //     const carrito = localStorage.getItem("carrito")
  //   }
    
  //   // console.log(carrito)
    
    
  // },[carrito])





  const savedValue = getSavedValue("carrito2")
  const carritoArr = savedValue.replace(/['"]+/g, '').replace("[", "").replace("]", "").split(",")

// console.log(carritoArr.split(","))
  // replaceAll(',', '')


// const carritoArr = savedValue
// console.log(carritoArr)

const body = carritoArr[0]
const grill = carritoArr[1]
const rollbar = carritoArr[2]
const bumper = carritoArr[3]
const rim = carritoArr[4]
const seat = carritoArr[5]
const top = carritoArr[6]
const steering = carritoArr[7]



// const [findRim, setFindRim ] = useState("")
// const [findSeat, setFindSeat ] = useState("") 
// const [findTop, setFindTop ] = useState("")




// const findingRim = storeItems[0].find(({ id }) => id === parseInt(rim))

// useEffect(() => {
//   if (findingRim !== undefined ){    
   
//     setFindRim(findingRim.price)
//     // console.log(findRim)
//   }
// },[findingRim])

// const findingSeat = storeItems[1].find(({ id }) => id === parseInt(seat))

// useEffect(() => {
//   if (findingSeat !== undefined ){    

//     setFindRim(findingSeat.price)
//     // console.log(findSeat)
//   }
// },[findingSeat])

// const findingTop = storeItems[2].find(({ id }) => id === parseInt(top))

// useEffect(() => {
//   if (findingTop !== undefined ){    
   
//     setFindTop(findingTop.price)
//     // console.log(findTop)
//   }
// },[findingTop])



// console.log(findTop)
// console.log(findRim)



  return (<>
        <div className="title">
                <p>HOME >>  YOUR SHOPPING CART</p>
              </div>
              <div className="subtitle">
                <h5>MY MOKE</h5>
        </div>
        <div className="margin-cart">
           <Car 
          body={body} 
          grill={grill}
          rollbar={rollbar}
          bumper={bumper}
          />
           
       </div>
       <div className="border-cart">
        <div className="shop-details-container">
          <ul>
            <li>Moke type:<strong> ELECTRIC</strong></li>
            <li>Body color: <strong>{body}</strong></li> 
            <li>Bumper color: <strong>{bumper}</strong></li>
            <li>Grill color: <strong>{grill}</strong></li>
            <li>Rollbar color: <strong>{rollbar}</strong></li> 
            <li>Rims: <strong>{ rim }</strong></li> 
            <li>Seats: <strong>{ }</strong></li>
            <li>What type of top: <strong>{top}</strong> </li>
            <li>Steering wheel: <strong>{steering}</strong></li>
          </ul>
       </div>
       
       {/* <div>{storeItems[0].map(item =>(
            // <div>{JSON.stringify(item.id)}</div>
      //  ))}
       </div> */}
  
      
       

       </div>
       <div className="border-cart">
       <div className="shop-details-container">
        Item Price: <strong>{}</strong> 
       </div>
       </div>
       <div className="border-cart">
       <div className="shop-details-container">
        TOTAL: <strong>$35,000.00</strong> 
       </div>
       </div>
       <div className="btn-add-cart"><a href='https://buy.stripe.com/cN27ubaPM5WKgJa288'> CHECK OUT</a></div>
        


       
</>
  )
}

export default Cart