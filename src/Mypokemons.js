import React ,{useEffect, useState} from "react";



const Mypokemon = (props) => {
  
  const linkHandler=()=>{
  props.setView('viewpokemon')
  
  }

  useEffect(()=>{
    const fetchPokeData = async ()=>{
    const responseTwo = await fetch (props.url)
    const pokemonData = await responseTwo.json()
    
   
    props.setPokemonData({
      species:pokemonData.species.name,
      sprites:pokemonData.sprites.front_default
    
    
    
    })

    }
   
    fetchPokeData()
    
   },[])



 return (
 <li>
  <img src = '#'/>
  <a href='#'onClick= {linkHandler}>{props.name}</a>
  </li>
 )};


const  Mypokemons=(props) =>{
  return (
    <ul>
        {props.fullList.map((poke, index) => (
        <Mypokemon key={index} name={poke.name} url={poke.url}  setView={props.setView} setPokemonData={props.setPokemonData}/>
    
      ))}
    </ul>
  );
};



export default Mypokemons;



