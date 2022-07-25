import React, {useState} from 'react'

import Component2 from './Component2';

const Component1 = () => {
    const [user, setuser] = useState({id: 101, name: "Satyaki Saha"});
  return (
    <div>
        <Component2 user={user}/>
    </div>
  )
}

export default Component1;