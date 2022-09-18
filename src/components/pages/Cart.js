import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Car from '../Car';
import "./Cart.css";
import storeItems from "../data/items.json"

function Cart() {

  const getData = () =>{  
    return localStorage.getItem("carrito")
  }
  const [ carrito, setCarrito ] = useState("")

  useEffect(() =>{
    setCarrito(getData());
  },["carrito"]);


  const carritoArr = carrito.split(",")
// console.log(carritoArr)
const body = carritoArr[0]
const grill = carritoArr[1]
const rollbar = carritoArr[2]
const bumper = carritoArr[3]
const rim = carritoArr[4]
const seat = carritoArr[5]
const top = carritoArr[6]
const steering = carritoArr[7]

// const getRim = () => {
//       storeItems[0].map(item => {
//         // console.log(item.id) })
      
//     }
// const findId(id){
//   return storeItems.id === find(item => item.id === id)

// }
// console.log(storeItems[0])
const findRim = storeItems[0].find(({ id }) => id === parseInt(rim));
// const findSeat = storeItems[1].find(({ id }) => id === parseInt(seat));
console.log(findRim)






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
            {/* <li>Seats: <strong>{findSeat.name }</strong></li> */}
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
        Item Price: <strong>$35,000.00</strong> 
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