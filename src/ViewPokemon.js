import React from'react'
import App from './App'


const ViewPokemon=(props)=>{
 
    

    return (

       <>
       
       <h2>Species: {props.pokemon.species}</h2>
       <img src = {props.pokemon.sprites}/>

       </>


    )
}
export default ViewPokemon