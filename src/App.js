import React,{useEffect, useState} from 'react'

import Title from './Title'
import Mypokemons from './Mypokemons'
import ViewPokemon from './ViewPokemon'



function App() {

 
 const [fullList, setFullList] = useState([])
 const [view, setView] = useState('')
 const [pokemon, setPokemonData] = useState({species:"", sprites:""})
 



 useEffect(()=>{
 const fetchPoke = async ()=>{
 const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=5&limit=5")
 const pokeList = await response.json()
 

 setFullList(pokeList.results)
 

 }

 fetchPoke()
 
},[])



console.log(pokemon)



 switch (view){
   case'viewpokemon':
   return(
     <div>
     <div>
     <ViewPokemon pokemon={pokemon}/>
    </div>
    </div>

   )

   default:
     return(
      <div>
     <Title />
     <Mypokemons fullList={fullList} setView={setView} setPokemonData={setPokemonData}/>
    </div>
     )
 }

}

export default App;
