import React from 'react'

import Pass from './Pass';

function Passapp() {

    const data = "I am from child component";

    const handelChildData = (childData) => {
        console.log("app :"+childData);
    };

    
  return (
    <div>
        <Pass data={data}  onChildData = {handelChildData} />
    </div>
  )
}

export default Passapp