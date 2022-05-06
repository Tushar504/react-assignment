import { useEffect, useState } from "react"
import "./rest.css"
export const Restraurants=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
    getData()
    },[])
    const getData=async()=>{
       let res=await fetch("http://localhost:8080/restraurants")
       let fetchedData=await res.json()
       
       setData(fetchedData)
    }
    return <div className="outerDiv">
         {data.map((e)=>{
             return <div className="innerDiv" key={e.id}>
                 <img src={e.img}/>
                 <div className="cat">
                     {e.category.map((e)=>{
                      return <p>{e}</p>
                      })}

                 </div>
                 <p>Min:{e.cost}</p>
                 <p>Votes:{e.votes}</p>
                 <p>Reviews:{e.reviews}</p>
             </div>
         })}
    </div>
}