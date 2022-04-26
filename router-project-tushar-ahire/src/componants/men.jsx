import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./mens.css"
export const Men=()=>{
    const [mensData,setMensData]=useState([])

    useEffect(()=>{
      getData()
    },[])
     const getData=async()=>{
         let res=await fetch("https://fakestoreapi.com/products")
         let data=await res.json()
       
         setMensData(data)
     }
    return <div className="mensData" >{mensData.map((ele)=>{
        return   <Link key={ele.id} to={`/mens/${ele.id}`}>  
           <div className="data" >
               <img src={ele.image} />
               <p >{ele.title}</p>
               <p>Price:₹ {ele.price}</p>

            </div>
        </Link>
    })}</div>
}