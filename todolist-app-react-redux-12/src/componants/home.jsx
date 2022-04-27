import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { updateTodo } from "../redux/action"

import { Link } from "react-router-dom";

export const Home=()=>{
    const [text,setText]=useState({
        todo:"",
        status:false

    })
 const [data,setdata]=useState([])
 useEffect(()=>{
    getData()
 },[])
 const getData=async()=>{
     let res=await fetch("http://localhost:8080/todose")
     let data=await res.json()
     setdata(data)
 }
    const updatetext=(data)=>{
        setText({
            ...text,
            [data.id]:data.value
        })
    }
    const todose=useSelector((store)=>store.todose)
    
    const dispatch=useDispatch()
   
    const setData=async(data)=>{
        let res=await fetch("http://localhost:8080/todose",{
            method:"POST",
            body:JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        getData()
    }
    return <div>
    <div>
        <input id="todo" onChange={(e)=>updatetext(e.target)} type="text" placeholder="Write Todo Here"/>
        <input onClick={()=>setData(text)} type="submit" value="ADD TODO" />
    </div>
    <h1>Todose</h1>
    {data.map((e)=>{
        return <div key={e.id}> <Link  to={`/todo/${e.id}`}>{e.todo}</Link></div>
    })}
    </div>
}