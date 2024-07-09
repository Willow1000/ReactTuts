import React from 'react'
import Table from './Table'

function Tables(props) {
  
  return (
    <table>
        <tbody>
          {props.data.map(x=>(
            <tr key={x.id}>
              <Table x = {x}/>
          </tr>
          ))}
          
        </tbody>
    </table>
  )
}

export default Tables