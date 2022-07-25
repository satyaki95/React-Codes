import React, { Component } from 'react'

class EventB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handelClick = this.handelClick.bind(this);
    }

    handelClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handelClick}>Increase</button>
      </div>
    )
  }
}

export default EventB;
