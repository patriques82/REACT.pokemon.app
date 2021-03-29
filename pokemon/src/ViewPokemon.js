import React, {useEffect, useState} from'react'

const ViewPokemon=(props)=>{

const [pokemon, setPokemonData] = useState({species:"", sprites:"", hp:"",attack:"", defense:"",type:""}) 

const clickHandler=()=>{
    props.setView('')
    props.setImg(pokemon.sprites)
    props.setImgState(false)
}


useEffect(()=>{
    const fetchPokeData = async ()=>{
    const responseTwo = await fetch (props.nextUrl)
    const pokemonData = await responseTwo.json()
    
    
      setPokemonData({
          
        species:pokemonData.species.name,
        sprites:pokemonData.sprites.front_default,
        hp:pokemonData.stats[0].base_stat,
        attack:pokemonData.stats[1].base_stat,
        defense:pokemonData.stats[2].base_stat,
        type:pokemonData.types[0].type.name
      
      })
    
    }
   
    fetchPokeData()
    
   },[])
 
    return (

      <div classNAme="displayPokemon">
       
       <img src = {pokemon.sprites}/>
       <h2>Species: {pokemon.species}</h2>
       <h3>Hp: {pokemon.hp}</h3>
       <h3>Attack: {pokemon.attack}</h3>
       <h3>Defense: {pokemon.defense}</h3>
       <h3>Type: {pokemon.type}</h3>
       <button onClick={clickHandler} className="buttonBack">Back</button>

      </div> 


    )
}
export default ViewPokemon