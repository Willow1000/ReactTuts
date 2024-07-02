import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
function LineItem(props) {
  return (
    <li className='item' >
        <article>
            <input type="checkbox" checked={props.item.checked} onChange={()=>props.handleChange(props.item.id)} />
            <label onDoubleClick={()=>props.handleChange(props.item.id)} style={props.item.checked?{textDecoration: 'line-through'}:null} >{props.item.name}</label>
        </article>
        <FaTrashAlt role='button' tabIndex="0" onClick={()=>props.handleDelete(props.item.id)}aria-label={`Delete ${props.item.item}`}/>
    </li>
  )
}

export default LineItem