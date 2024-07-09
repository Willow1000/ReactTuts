import React from 'react'

function Buttons(props) {
  return (
    <button className={props.buttonText===props.request?"selected":null} type='button' onClick={()=>{props.setRequest(props.buttonText)}}>
        {props.buttonText}
    </button>
  )
}

export default Buttons