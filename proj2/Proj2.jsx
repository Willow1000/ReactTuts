import React from 'react'
import colorNames from 'colornames'

function Proj2(props) {
  return (
    <section>
        <article className='container' style={{
            background:`${props.value}`,
            color:`${props.isDark?'#fff':'#000'}`
        }}>
            <span>{props.value?props.value:'Empty Value'}</span>
            <span>{props.hexValue?props.hexValue:null}</span>
        </article> 
        <input type="text" autoFocus className='input' onChange={(e)=>{props.setValue(e.target.value)
            props.setHexValue(colorNames(e.target.value))
        } }placeholder='Add Color Name'/>
        <button onClick={()=>{props.setIsDark(!props.isDark)}}>Toggle Text Color</button>
    </section> 
  )
}

Proj2.defaultProps={
    value:'Empty Color Value'
}
export default Proj2