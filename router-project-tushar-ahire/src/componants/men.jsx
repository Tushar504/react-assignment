import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./mens.css"
export const Men=()=>{
    const [mensData,setMensData]=useState([])
    
   const addToCart=(ele)=>{
    let data=JSON.parse(localStorage.getItem("cartData"))||[]
    data.push(ele)
    localStorage.setItem("cartData",JSON.stringify(data))
   }
    useEffect(()=>{
      getData()
    },[])
     const getData=async()=>{
         let res=await fetch("https://fakestoreapi.com/products")
         let data=await res.json()
       
         setMensData(data)
     }
    return <div className="mensData" >{mensData.map((ele)=>{
        
        return   <div key={ele.id}>
        <Link  to={`/mens/${ele.id}`}>  
           <div className="data" >
               <img src={ele.image} />
               <p >{ele.title}</p>
               <p>Price:₹ {ele.price}</p>
             
            </div>
        </Link>
        <button onClick={()=>addToCart(ele)}>Add to cart</button>
        </div>
    })}
    </div>
}