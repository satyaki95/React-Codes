import React, {useState} from 'react'

import Component2 from './Component2';
import { UseContext } from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({id: 101, name: "Satyaki Saha"});
    const [text, setText] = useState("hello");
  return (
    <UseContext.Provider value={{user, text}}>
        <Component2 />
    </UseContext.Provider>
  )
}

export default Component1;