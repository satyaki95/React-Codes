import React, { useState } from 'react'

import User from './User';

const Users = () => {
    const [user, setUser] = useState({
        id: 1302020017,
        name: "Satyaki Saha",
      });

    // const [userName, setUserName] = useState("Satyaki");
    // const [userId, setUserId] = useState(100);
  return (
    <>
        <User user={user}/>
    </>
  )
}

export default Users;