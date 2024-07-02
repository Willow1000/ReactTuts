import Itemlist from "./itemList"

function Groccery(props){
  
    if(props.items.length===0){
        return(
            <h1 style={{textAlign: 'center',textTransform:'capitalize'}}>Your {props.name} List is Empty</h1>
        )
        
    }return(<Itemlist items={props.items} handleChange={props.handleChange} handleDelete={props.handleDelete}/>)

}


export default Groccery