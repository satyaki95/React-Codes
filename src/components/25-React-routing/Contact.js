import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate= useNavigate();
  return (
    <div>
         <div>
        <h1>Contact page</h1>
        <p>Aliquyam vero tempor eos et ea, 
        kasd tempor et aliquyam clita aliquyam no sed.
     Kasd invidunt ipsum sed diam dolores. Sea ipsum labore et magna,
    at ipsum rebum dolor ipsum aliquyam.
    Ipsum kasd et dolores eirmod sed nonumy rebum ipsum.
    Ipsum sed amet diam justo sadipscing
   gubergren accusam amet tempor..</p>

    <p>Sanctus vero no duo sit amet, 
  tempor dolor amet aliquyam dolor dolore sed justo justo,
  et lorem vero ea sit dolore sed, 
  ipsum justo clita diam accusam accusam nonumy rebum.</p>

             <button onClick={()=>{
              navigate("/home")
             }}>go to home</button>
    </div>
    </div>
  )
}

export default Contact