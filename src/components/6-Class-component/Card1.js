
import react, {Component} from 'react'

class Card1 extends Component{
    render(){
        return(
           <div>
            <h3>"hallow from Card1"</h3> 
           <h1>hallow</h1>
           <h2>{this.props.name}</h2>
           </div>
           
        )
    }
}

export default Card1;