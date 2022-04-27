import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Todo=()=>{
   let id=useParams().id
   let [todo,settodo]=useState({})
   const navigate=useNavigate()
   useEffect(()=>{
       getData()
   },[])
   let getData=async()=>{
       let res=await fetch(`http://localhost:8080/todose/${id}`)
       let data=await res.json()
       settodo(data)
   }
   
   const updateTodo=async()=>{
    let res=await fetch(`http://localhost:8080/todose/${id}`,{
        method:"PATCH",
        body:JSON.stringify({
            status:true
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    getData()
   }

   const removeTodo=async()=>{
    let res=await fetch(`http://localhost:8080/todose/${id}`,{
        method:"DELETE",
      
        headers: { 'Content-Type': 'application/json' }
    })
return navigate(-1,{replace:true})
   }
    return <div>
        <h1>TODO</h1>
        <h2 style={{color:"red"}}>{todo.todo}</h2>
        {todo.status==false ?<h3>Status :Not completed</h3>:<h3>Status:Completed</h3>}
        {todo.status==true ? null:<button onClick={()=>updateTodo()}>Completed</button>}
        <button onClick={()=>removeTodo()}>Remove</button>
        <button onClick={()=>navigate(-1,{replace:true})}>Back</button>
    </div>
}