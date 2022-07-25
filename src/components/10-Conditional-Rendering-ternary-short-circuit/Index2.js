import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'
import './Style.css'


class CONDITIONAL_RENDER extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : true
      }
    }
  render() {

    const {isLoggedIn} = this.state;
    let element;

    element = isLoggedIn ? <Home /> : <Login />

//    if(isLoggedIn){
//     element =  <Home />
//    }
//    else{
//     element = <Login />
//   }
  return (
    <div>
       <h1>{element}</h1> 
    </div>
  )
  }
 
}

export default CONDITIONAL_RENDER;