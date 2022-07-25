import React, {memo, useMemo} from 'react'

const Message = ({numberOfMessages, onHandleIncrement}) => {
    console.log("Message Reandering");

    const calculatedNumber = useMemo(
     () => {
      let number =0;
      for (let index = 0; index < 5000000000; index++) {
        number++;
        
      }
      return number;
     }
    ,[] )

  return (
    <div>
      <h2>Number : {calculatedNumber}</h2>
        <p>Send {numberOfMessages} Message</p>
        <button onClick={onHandleIncrement}>Increment Messsage</button>
    </div>
  )
}

export default memo(Message);