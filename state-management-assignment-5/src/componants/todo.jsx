import { useState } from "react"
import { Todolist } from "./todolist"
import './todo.css'
import { v4 as uuidv4 } from 'uuid'
export const Todo=()=>{
  const [text,setText]=useState("")
  const [todolist,setTodolist]=useState([])
  const updateTodolist=()=>{
    let reload={
        title:text,
        flag:false,
        id:uuidv4()
    }
    setTodolist([...todolist,reload])
    console.log(todolist)
  }
  const changedata=(id)=>{
      setTodolist([...todolist.map((e)=>(e.id===id ? {...e,flag:!e.flag}:e))])
  }
    return (
        <div className="tododiv">
            <h1>TODO APP</h1>
            <input type="text" placeholder="Write Something" onChange={(e)=>setText(e.target.value)}></input>
            <button onClick={()=>updateTodolist()} className='plus'>+</button>
           
            <Todolist data={todolist} change={changedata} />
            
        </div>
    )
}