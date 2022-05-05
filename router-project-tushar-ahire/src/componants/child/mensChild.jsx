import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./mensChild.css"
export const MenChild=()=>{
    const {id}=useParams()

   
    const [child,setChild]=useState({})
    
   useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
           
         setChild(data)
       })

    
  
   },[])
   
   
 
    return <div className="children">
        <img src={child.image} />
        <h3>{child.title}</h3>
        <h6>Price:{child.price}</h6>
        <h6>Description:{child.description}</h6>
    </div>
}