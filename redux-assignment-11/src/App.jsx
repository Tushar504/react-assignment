import { useState } from 'react'
import './App.css'
import {store} from "./store"
function App() {
  const [todo,setTodo]=useState("")
  const [todoData,setTododata]=useState([])
  return (
    <div className="App">
     <form>
      <input onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Write todo here'/>
      <input onClick={(e)=>{e.preventDefault(),store.dispatch({type:"ToDo",payload:todo})
    setTododata(store.getState().todose)}} type="submit"/>
      </form>
      <div>
        {todoData.map((e,i)=>{
          return <h1 key={i}>{e}</h1>
        })}
      </div>
    </div>
  )
}

export default App
