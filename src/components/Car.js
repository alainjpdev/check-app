import React, { useState } from 'react'
import "./Car.css"

function Car(props) {

    const [ body, setBody ] = useState("black")

    const [ grill, setGrill ] = useState("black")

    const [ rollbar, setRollbar ] = useState("black")

    const [ bumper, setBumper ] = useState("black")
  return (
<>    <div className="container-image">
    <div className="default-car-container">        
        <img className="image2" src="./images/moke pics/body/b-base.png" width={"300px"} alt="Something"key={0}/>
        <img className="image2" src={`./images/moke pics/grill/g-${props.grill}.png`} width={"300px"} alt="Something"key={1}/>
        <img className="image2" src={`./images/moke pics/body/b-${props.body}.png`} width={"300px"} alt="Something"key={3}/>
        <img className="image2" src={`./images/moke pics/roll/r-${props.rollbar}.png`} width={"300px"} alt="Something"key={4}/>
        <img className="image2" src={`./images/moke pics/bumper/p-${props.bumper}.png`} width={"300px"} alt="Something"key={5}/>
        <img className="image2" src="./images/moke pics/seat/s-test.png" width={"300px"} alt="Something"key={6}/>
        <img className="image2" src="./images/moke pics/wheel/w-black.png" width={"300px"} alt="Something"key={7}/>
        
   </div>
   </div>
</>

  )
}

export default Car