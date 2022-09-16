import bblack from "../images/moke pics/body/b-black.png"
import bblue from "../images/moke pics/body/b-blue.png"
import bcamo from "../images/moke pics/body/b-camo.png"
import bcobalt from "../images/moke pics/body/b-cobalt.png"
import bcream from "../images/moke pics/body/b-cream.png"
import bgreen from "../images/moke pics/body/b-green.png"
import bmint from "../images/moke pics/body/b-mint.png"
import borange from "../images/moke pics/body/b-orange.png"
import bpink from "../images/moke pics/body/b-pink.png"
import bred from "../images/moke pics/body/b-red.png"
import brose from "../images/moke pics/body/b-rose.png"
import bwhite from "../images/moke pics/body/b-white.png"
import byellow from "../images/moke pics/body/b-yellow.png"

export function Body(props){
    if(props.color === "black"){
      return(
        <>
          <img className="image2" src={bblack} width={"300px"} alt="Something"key={3}/>
        </>
       )
      }
       else if(props.color === "blue"){
        return(
          <>
            <img className="image2" src={bblue} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "camo"){
        return(
          <>
            <img className="image2" src={bcamo} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "cobalt"){
        return(
          <>
            <img className="image2" src={bcobalt} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "cream"){
        return(
          <>
            <img className="image2" src={bcream} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "green"){
        return(
          <>
            <img className="image2" src={bgreen} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "mint"){
        return(
          <>
            <img className="image2" src={bmint} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "orange"){
        return(
          <>
            <img className="image2" src={borange} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "pink"){
        return(
          <>
            <img className="image2" src={bpink} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "red"){
        return(
          <>
            <img className="image2" src={bred} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "rose"){
        return(
          <>
            <img className="image2" src={brose} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "white"){
        return(
          <>
            <img className="image2" src={bwhite} width={"300px"} alt="Something"key={3}/>
          </>
        )
       }
       else if(props.color === "yellow"){
        return(
          <>
            <img className="image2" src={byellow} width={"300px"} alt="Something"key={3}/>
          </>
        )
       } 
    }