import React from 'react'
import { Link } from 'react-router-dom';

function Rent() {
    return (
        <div className="h-full flex justify-center flex-col">
       
    
          <div className=" w-2/3 m-auto p-8 shadow-lg">
            <h1 className="text-4xl font-bold flex items-center">
              <span>
                
              </span>
              <br/>
              <br/>
              <br/>
              <span>RENT MOKE PER DAY</span>
              <br/>
          
              <br/>
              <h2>
            2 HOURS 100 USD 
            <a target="_blanck" className="greenButton" href="https://checkout.stripe.com/c/pay/cs_live_a1iE5oRmN8eFl9iltXW7xAlUiMXzwy0YgKn0QYCOMmCmyuNjTVfy9HCUmY#fidkdWxOYHwnPyd1blppbHNgWjA0Tnc3NkRDclV1VWtVQH1DR3Z%2FUkliNGBidUdBUU1ub0JOXFJXU0lhPEpcQ3Rkd1wyQ3V0QW1KU3ZdNWJxS1N%2FNnBhRFdDblBnVzY9NW1WY0NjYX1yTDBkNTVMcW9wfUQwMScpJ3VpbGtuQH11anZgYUxhJz8nZEBQPEF3ZGBkMTVnMV0zNDEzJ3gl" >Rent Now</a>
            </h2>
            
            <br/>
            <h2>
            4-5 HOURS 170 USD
            <a  target="_blanck" className="greenButton" href="https://checkout.stripe.com/c/pay/cs_live_a1iE5oRmN8eFl9iltXW7xAlUiMXzwy0YgKn0QYCOMmCmyuNjTVfy9HCUmY#fidkdWxOYHwnPyd1blppbHNgWjA0Tnc3NkRDclV1VWtVQH1DR3Z%2FUkliNGBidUdBUU1ub0JOXFJXU0lhPEpcQ3Rkd1wyQ3V0QW1KU3ZdNWJxS1N%2FNnBhRFdDblBnVzY9NW1WY0NjYX1yTDBkNTVMcW9wfUQwMScpJ3VpbGtuQH11anZgYUxhJz8nZEBQPEF3ZGBkMTVnMV0zNDEzJ3gl" >Rent Now</a>
            
            </h2>
            <h2>
              {/* Camila */}
            </h2>
            <br/>
              <br/>
              <br/>
              <br/>
    
            </h1>

          </div>
        </div>
      );
}

export default Rent