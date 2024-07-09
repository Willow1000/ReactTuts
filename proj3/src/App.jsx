import { useEffect, useState } from 'react'
import Form from './Form'
import Tables from './Tables'

function App() {
  const[request,setRequest]= useState('users')
  const [data,setData] = useState([])
  const API_URL=`https://jsonplaceholder.typicode.com/${request}`
  
useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('An error occured')
      const fetchedData = await response.json()
      setData(fetchedData)
    }catch(err){
      console.error(err.name)
    }
    
    
  }
  fetchData()
},[request])
  
  return(
    <>
    <Form request={request} setRequest = {setRequest}/>
    <Tables data = {data}/>
    </>

  )
}

export default App
