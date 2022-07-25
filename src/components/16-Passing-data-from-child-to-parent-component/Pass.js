import React from 'react'

 const Pass = (props) => {

    const data = "I am from child2 component";
    props.onChildData(data);
  
    return (
      <div>
        <p>I am child component</p>
        <p>{props.data}</p>
      </div>
  )
}

export default Pass;