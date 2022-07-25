import React, { Component } from 'react'

// Mounting -> constructor -> render -> componentDidmount
// Updating -> state/props -> render -> 
// Unmounting

export default class LifeCycle extends Component {

    constructor(props) {
      super(props)

      console.log("constructor");
    
      this.state = { 
        count : 0
       };

    }

    shouldComponentUpdate() {
        console.log("shouldcomponentupdate");
        return true;
    }

    componentDidMount(){
        console.log("componentDidupdate");
    }

    componentDidUpdate(){
        console.log("componentDidmount");
    }

   

     handelIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }


  render() {
    {console.log("render");}
    return (

      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handelIncrement}>+</button>
      </div>
    )
  }
}
