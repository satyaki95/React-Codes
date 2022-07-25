import React, { useState } from 'react'

export default function Hooks2() {
        const [count,setCount] =useState(0)
   const handelDecrement = () => {
        setCount(count-1);
    }
  return (
    <div>
        <h1> Count : {count}</h1>
        <button onClick={handelDecrement}>Dncrement</button>
    </div>
  )
}
