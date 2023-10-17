import React from 'react';
import '../styleSheets/Biography.css';

function Biography(props){
  return(
    <div className='Biography-container'> 
      <img className='img-biography' src={require(`../images/character-${props.img}.jpg`)} 
      alt={props.name}/> 
      <div className='text-container'>
          <p className='character-name'>{props.name}</p>
          <p className='character-role'>{props.role}</p>
          <p className='description-text'>{props.description} </p>
      </div>
    </div>      
  );    
}

export default Biography; 