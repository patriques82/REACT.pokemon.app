import React,{useEffect, useState} from 'react'

import Title from './Title'
import Footer from './Footer'
import Mypokemons from './Mypokemons'
import ViewPokemon from './ViewPokemon'



function App() {
 
 const [fullList, setFullList] = useState([])
 const [view, setView] = useState('')
 const [nextUrl, setNextUrl] =useState('')
 const [img, setImg]= useState('')
 const [imgState, setImgState] = useState(true)
 const [prevList, setPrevList] = useState([])

 const listLength = fullList.length
 

 useEffect(()=>{
 const fetchPoke = async ()=>{
 const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=100&limit=100")
 const pokeList = await response.json()

 setFullList(pokeList.results)
 
 }

 fetchPoke()
 
 
},[])

  const removePokemon=(name)=>{
  const newArray = fullList.filter( poke => poke.name !== name )
  setFullList(newArray)
 }

  const clearAll=()=>{
  setPrevList(fullList)
  setFullList([])
  
 }

 const renewList=()=>{
  setFullList(prevList)
  
 }
 
 


 switch (view){
   case'viewpokemon':
   return(
     
     <div className="displayPokemon">
     <ViewPokemon  nextUrl={nextUrl} setView={setView} setImg={setImg} setImgState={setImgState}/>
    </div>
    

   )

   default:
     return(
      <div className="wrapper">
     <Title />
     <Mypokemons fullList={fullList} setView={setView} setNextUrl={setNextUrl} nexyUrl={nextUrl} 
      img={img} imgState={imgState} removePokemon={removePokemon}/>
      <Footer clearAll={clearAll} renewList={renewList} listLength={listLength}/>
    </div>
     )
 }

}

export default App;
