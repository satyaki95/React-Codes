import React, { useCallback, useState } from 'react'
import Message from './Message';

const Memo = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    console.log("rendering");

    const handleIncrementMessage = useCallback(() => {
        setCount(count + 1);
    }, [count])

    
  return (
    
    <div>
        {toggle ? 'on' : 'off'}
        <button onClick={()=>{setToggle(!toggle)
        }}>toggle</button>
        <h1>Count : {count}</h1>
        <button
         onClick={() => {
            setCount((count) => count + 1) }}
            >Increment</button>

            <Message numberOfMessages={count} onHandleIncrement =
           {handleIncrementMessage} />
    </div>
  )
}

export default Memo;