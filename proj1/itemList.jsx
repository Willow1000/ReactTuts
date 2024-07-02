import LineItem from "./LineItem"

function Itemlist(props){
    return(
        <ul>{props.items.map(item=>(
            <LineItem  handleDelete={props.handleDelete} handleChange={props.handleChange} item={item} key={item.id}/>
        ))}</ul>
    )
}

export default Itemlist