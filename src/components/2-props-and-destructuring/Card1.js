
const date = new Date();
const monthName = date.getMonth();
const dateName = date.getDate();
const currentYear = date.getFullYear();

//  destructuring

// const name = ["dog","cat"];

// or

// const  [dog,cat] = name;

// or

// const dog = name[0];
// const cat = name[1];

function Card(props){
    const {titleText, descText} = props;
  return   <div className='card'>
           <h3  className='cardTitle' >{titleText}</h3>
           <p className='cardDesc'>{descText}</p>
           <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>
}

export default Card;


// put this (App.js) 

// function App(){

//   return <div>
//   <Map titleText={"Call Mother"} descText="this is desc1"/>
//   <Map titleText="Call Father" descText="this is desc2"/>
//   <Map titleText="Call Unt" descText="this is desc3"/>
  
 
  
//   </div>
// }