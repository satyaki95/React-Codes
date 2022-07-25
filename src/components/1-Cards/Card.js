const todoTitle = "Call Family";
const todoDes = "At eos ut vero dolor kasd clita accusam est nonumy,.";
const date = new Date();
const monthName = date.getMonth();
const dateName = date.getDate();
const currentYear = date.getFullYear();


function Card(){
  return   <div className='card'>
           <h3  className='cardTitle' >{todoTitle}</h3>
           <p className='cardDesc'>{todoDes}</p>
           <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>
}

export default Card;