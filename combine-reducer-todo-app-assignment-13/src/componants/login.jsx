import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {setStatus} from "../redux/Auth/authaction"
import { useNavigate } from "react-router-dom"
export const Login=()=>{
    const usere=useSelector((store)=>store.Loginstatus)
    const navigate=useNavigate()
    console.log(usere)
    const [user,setUser]=useState({
        email:"",
        password:""
    })
  const dispatch=useDispatch()
    const updateUser=(data)=>{
        setUser({
            ...user,
            [data.id]:data.value
        })
    }
    const userLogin=async()=>{
        let res=await fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(user),
            
                headers: { 'Content-Type': 'application/json' },
    
        })
        let data=await res.json()
        if(data.error){
            return alert("Wrong Information")
        }
        else{
          dispatch(setStatus(data.token))
           return navigate(-1,{replace:true})
        }

    }
    return <div>
        <form>
            <input id="email" onChange={(e)=>updateUser(e.target)} type="text" placeholder="Email" />
            <input id="password" onChange={(e)=>updateUser(e.target)} type="text" placeholder="Password" />
            <input onClick={(e)=>{e.preventDefault(),userLogin()}} type="submit" value="Login"/>
            
        </form>
    </div>
}