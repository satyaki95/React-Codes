import React, {useContext} from 'react'

import { UseContext } from './UserContext';

const Component4 = () => {
  const {user,text} = useContext(UseContext);
  return (
    <div>
      <h2>{text}</h2>
        <p>{user.id}</p>
        <p>{user.name}</p>
    </div>
  )
}

export default Component4;