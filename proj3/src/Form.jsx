import React from 'react'
import Buttons from './Buttons'

function Form(props) {
  return (
    <form action="">
        <Buttons buttonText = 'users' request={props.request} setRequest = {props.setRequest}/>

        <Buttons buttonText = 'comments' request={props.request} setRequest = {props.setRequest}/>

        <Buttons buttonText = 'posts' request={props.request} setRequest = {props.setRequest}/>
    </form>
  )
}

export default Form