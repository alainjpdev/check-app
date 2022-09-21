import "../../App.css"
import HeroSection from "../HeroSection"
import React from 'react'
import Cards from "../Cards"


localStorage.setItem("sales", JSON.stringify("Mark"))
function HomeMark() {
  return (
    <>
    <HeroSection />
    <Cards/> 

    </>
  )
}

export default HomeMark