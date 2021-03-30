export default function Footer(props){

   const clearHandler=()=>{
    props.clearAll()

   }

   const renewHandler=()=>{
    props.renewList()

   }

   

    return(
    <footer>
     <p style={{marginLeft:20,marginTop:20, fontSize:14}}>There are {props.listLength} pokemons</p>
    <button onClick={clearHandler} className="buttonClear">Clear List</button>
    <button onClick={renewHandler} className="buttonRenew">Undo</button>
    </footer>
    )
    }