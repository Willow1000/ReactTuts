import React from 'react'

function Proj2(props) {
  return (
    <section>
        <article className='container' style={{
            background:`${props.value}`
        }}>
            {props.value?props.value:'Empty Value'}
        </article> 
        <input type="text" autoFocus className='input' onInput={(e)=>props.setValue(e.target.value)} placeholder='Add Color Name'/>
    </section> 
  )
}

export default Proj2