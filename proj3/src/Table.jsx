import React from 'react'

function Table(props) {
  const keys = Object.keys(props.x)
  return (
    <>
   {keys.map(y=>(
    <td key={JSON.stringify(props.x[`${y}`])}>{JSON.stringify(props.x[`${y}`])}</td>
   ))}
   </>
  )
}

export default Table