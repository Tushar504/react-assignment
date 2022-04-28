import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
export const Singletodo=()=>{
    const id=useParams().id
    const [todose,setTodo]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
       getData()
    },[])

    const getData=async()=>{
        let res=await fetch(`http://localhost:8080/todose/${id}`)
        let data=await res.json()
       setTodo(data)
    }

    const updateTodo=async()=>{
        let res=await fetch(`http://localhost:8080/todose/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
               
                status:true
            }),
            headers: { 'Content-Type': 'application/json' },
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
        <h1>{todose.todo}</h1>
        <h3>Status:{todose.status===false ? "Not-Completed":"Completed"}</h3>
        <button onClick={()=>updateTodo()}>Completed</button>
        <button onClick={()=>removeTodo()}>Remove</button>
    </div>
}