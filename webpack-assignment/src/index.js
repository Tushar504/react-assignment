import img from "./logo.jpg"
import "./index.css"

document.querySelector("#input").addEventListener("input",()=>{
    let data=document.querySelector("#input").value ||null
    if(data!=null){
    document.getElementById("output").innerHTML=data
    document.getElementById("output").style.visibility="visible"
    }
    else{
        document.getElementById("output").style.visibility="hidden"
    }
})
document.getElementById("logo").src=img

