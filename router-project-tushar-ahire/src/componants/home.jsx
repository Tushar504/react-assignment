import { useEffect, useState } from "react"
export const Home=()=>{
    const [data,setData]=useState(["https://rukminim1.flixcart.com/flap/844/140/image/4313fd77ab0af5ba.jpg?q=50","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KI2_rVsk3i3yjTnd2cHzo7x-vkqbZNUcNw&usqp=CAU","https://image.shutterstock.com/image-vector/brush-sale-banner-vector-260nw-1090866878.jpg"])
    const [Img,setImg]=useState(data[0])
   let i=1;
useEffect(()=>{
    setInterval(()=>{
        setImg(data[i])
        if(i==2){
            i=0
        }
        else{
            i++
        }
     },5000)
},[])
   
             
    return <div>
        <img src={Img}/>
    </div>
}