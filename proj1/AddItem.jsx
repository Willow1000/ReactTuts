import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddItem(props) {
  return (
    <form   className='addForm' onSubmit={props.handleSubmit}>
        
        <label htmlFor="addItem">Add Item</label>
        <input type="text" autoFocus id='addItemName' placeholder='Add Item Name' required />
        <input type="number" autoFocus id='addItemQuantity' placeholder='Add Item Quantity' required />
        <button type='submit' aria-label='Add Item' onClick={props.handleSubmit}><FaPlus/></button>
    </form>
  )
}

export default AddItem