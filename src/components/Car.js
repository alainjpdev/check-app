import React, { useState } from 'react'
import "./Car.css"
import bodyBase from "../images/moke pics/body/b-base.png"
import seatImg from "../images/moke pics/seat/s-test.png"
import wheelImg from "../images/moke pics/wheel/w-black.png"

import { Body } from './Body'
import { Grill } from './Grill'
import { Rollbar } from './Rollbar'
import { Bumper } from './Bumper'

function Car(props) {

    // const [ body, setBody ] = useState("black")

    // const [ grill, setGrill ] = useState("black")

    // const [ rollbar, setRollbar ] = useState("black")

    // const [ bumper, setBumper ] = useState("black")

  return (
    <>    
      <div className="container-image">
        <div className="default-car-container">        
          <img className="image2" src={bodyBase} width={"300px"} alt="Something"key={0}/>
          <Body color={props.body}/>
          <Grill color={props.grill}/>
          <Rollbar color={props.rollbar}/>
          <Bumper color={ props.bumper}/>
          <img className="image2" src={seatImg} width={"300px"} alt="Something"key={6}/>
          <img className="image2" src={wheelImg} width={"300px"} alt="Something"key={7}/>   
        </div>
      </div>
    </>
  )
}
   
export default Car


 