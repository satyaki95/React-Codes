import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true);
    
  return (
    <div style={{margin: "1rem",
    backgroundColor: "pink",padding: "1rem"}}>

        {toggle && (
               <p>
               Ut est rebum eirmod et consetetur.
                Rebum et est dolor dolor justo kasd vero ut,
                 amet sed clita elitr vero.
           </p>
        )}
     
       <div style={{textAlign:"center"}}>
       <button onClick={() => {setToggle(!toggle)}}>
        {toggle ? "Hide" : "Show"}
       </button>
        
       </div>
    </div>
  )
}

export default Toggle;