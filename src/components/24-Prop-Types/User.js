import React from 'react'

import PropTypes from 'prop-types'

const User = (props) => {
  return (
    <div>
        {/* <h1>{props.userName}</h1>
        <h3>{props.userId}</h3> */}
         <h3>{props.user.id}</h3>
      <h3>{props.user.name}</h3>
    </div>
  )
}

User.prototype = {
    // key-value

    // userName: PropTypes.string,
    // userId: PropTypes.number

    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
}

// User.defaultProps = {
//     userName: "default name",
//     userId: 0,
// }

export default User;