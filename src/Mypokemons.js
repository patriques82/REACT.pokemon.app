import React ,{useEffect, useState} from "react";


const Mypokemon = (props) => {
 

  const linkHandler=()=>{
  props.setView('viewpokemon')
  props.setNextUrl(props.url)
  
  }
  
  const removeHandler=()=>{
    props.removePokemon(props.name)
  }


  // <img src={props.image ? props.image : 'logopokemon.png'} style={{width:50, height:40}}/>

 return (
   
 <li>
  <img src = 'logopokemon.png' style={{width:50, height:40}}/>
  <a href='#'onClick= {linkHandler} >{props.name}</a>
  <button onClick={removeHandler} className="buttonRemove">X</button>
  
  </li>
  
 )};

// Tidigare poke = {url, name}
// Nu poke = {url, name, image}
// <Mypokemon img={poke.image} />

const  Mypokemons=(props) =>{
  return (
    
    <ul className="pokelist">
        {props.fullList.map((poke, index) => (
        <Mypokemon key={index} name={poke.name} url={poke.url} 
         setView={props.setView} setNextUrl={props.setNextUrl} img={props.img} imgState={props.imgState} nextUrl={props.nextUrl} removePokemon={props.removePokemon}/>
    
      ))}
    </ul>
   
  );
};



export default Mypokemons;



