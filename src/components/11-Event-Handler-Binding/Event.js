import React, { Component } from 'react'

 class Event extends Component {

     constructor(props) {
       super(props)
     
       this.state = {
          changedValue : ''
       }
     }

    handleClick = (e) => {
        this.setState({
            changedValue : e.target.value
        }, ()=> {
            console.log(this.state.changedValue)
        })
        
    }
  render() {
    return (
      <div>
       <input type={"text"} onChange={this.handleClick}></input>
       <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
export default Event;
