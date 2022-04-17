import { useEffect, useRef, useState } from "react"

export const Stopwatch=()=>{
    const [scounter,setScounter]=useState(0)
    const [mcounter,setMcounter]=useState(0)
    const [flag,setFlag]=useState(true)
    const id1=useRef(null)
    const id2=useRef(null)
    useEffect(()=>{
        if(flag===false){
        id1.current=setInterval(()=>{
            
            setMcounter((value)=>{
                if(value===100){
                    return 0
                }
                return value+1
            })
        },10)
        id2.current=setInterval(()=>{
            setScounter((value)=>{
               return value+1
            })
        },1000)
    }
        return 
    },[flag])

   
    return (<div className="button">
        <div className="data">
        <div>
        <h1>{scounter}s {mcounter}</h1>
        
        </div>
        </div>
        {flag ?<button className="blue" onClick={()=>setFlag(!flag)}>START</button>:null}
        {flag ?null:<button className="blue" onClick={()=>{
           clearInterval(id1.current)
           clearInterval(id2.current)
           setFlag(!flag)
        }}>STOP</button>}
       <button className="none" onClick={()=>{ clearInterval(id1.current);
           clearInterval(id2.current);
           setFlag(flag ? flag:!flag);setScounter(0);setMcounter(0)}}>RESET</button>
        
    </div>)
}