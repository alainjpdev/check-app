import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Car from '../Car';
import "./Cart.css";
import storeItems from "../data/items.json"
import useLocalStorage from '../../hooks/useLocalStorage';

import emailjs from '@emailjs/browser';
import {useRef} from "react"

function getSavedValue(key){
  const savedValue = localStorage.getItem(key)
  if(savedValue) return savedValue
}


function Cart() {

  const form = useRef()

 
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


const stripePay = ""

  const salesagent = getSavedValue("sales")
  const savedValue = getSavedValue("carrito2")
  const carritoArr = savedValue.replace(/['"]+/g, '').replace("[", "").replace("]", "").split(",")
  console.log(salesagent)
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


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_t42ges4', 'template_sxl46nq', form.current, 'LWhLzpN2d1Yzzs4DY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    window.location.href ="https://checkout.stripe.com/c/pay/cs_live_a1iE5oRmN8eFl9iltXW7xAlUiMXzwy0YgKn0QYCOMmCmyuNjTVfy9HCUmY#fidkdWxOYHwnPyd1blppbHNgWjA0Tnc3NkRDclV1VWtVQH1DR3Z%2FUkliNGBidUdBUU1ub0JOXFJXU0lhPEpcQ3Rkd1wyQ3V0QW1KU3ZdNWJxS1N%2FNnBhRFdDblBnVzY9NW1WY0NjYX1yTDBkNTVMcW9wfUQwMScpJ3VpbGtuQH11anZgYUxhJz8nZEBQPEF3ZGBkMTVnMV0zNDEzJ3gl"
       

};



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
            <li>Body color: <strong>{body.toUpperCase()}</strong></li> 
            <li>Bumper color: <strong>{bumper.toUpperCase()}</strong></li>
            <li>Grill color: <strong>{grill.toUpperCase()}</strong></li>
            <li>Rollbar color: <strong>{rollbar.toUpperCase()}</strong></li> 
            {/* <li>Rims: <strong>{ rim }</strong></li> 
            <li>Seats: <strong>{ }</strong></li>
            <li>What type of top: <strong>{top}</strong> </li>
            <li>Steering wheel: <strong>{steering}</strong></li> */}
          </ul>
       </div>
       
       {/* <div>{storeItems[0].map(item =>(
            // <div>{JSON.stringify(item.id)}</div>
      //  ))}
       </div> */}
  
      
       

       </div>
       <div className="border-cart">
       <div className="shop-details-container">
        ITEM PRICE TOTAL: <strong>$29,990.00</strong> 
       </div>
       </div>
       <div className="border-cart">
       <div className="shop-details-container">
        DEPOSIT OF FIRST PAY: <strong>$15,000.00</strong> 
       </div>
       </div>
       <div className="btn-add-cart">
        <form ref={form} 
        onClick={sendEmail} 
        salesagent={salesagent}>
       <a href="https://checkout.stripe.com/c/pay/cs_live_a1iE5oRmN8eFl9iltXW7xAlUiMXzwy0YgKn0QYCOMmCmyuNjTVfy9HCUmY#fidkdWxOYHwnPyd1blppbHNgWjA0Tnc3NkRDclV1VWtVQH1DR3Z%2FUkliNGBidUdBUU1ub0JOXFJXU0lhPEpcQ3Rkd1wyQ3V0QW1KU3ZdNWJxS1N%2FNnBhRFdDblBnVzY9NW1WY0NjYX1yTDBkNTVMcW9wfUQwMScpJ3VpbGtuQH11anZgYUxhJz8nZEBQPEF3ZGBkMTVnMV0zNDEzJ3gl"
        target="_blank" >CHECKOUT</a><textarea name="message" className='hide' display="none">{salesagent}</textarea></form>
      </div>
        


       
</>
  )
}

export default Cart