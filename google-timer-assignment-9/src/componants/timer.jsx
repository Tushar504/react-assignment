import { useEffect, useRef, useState } from "react"

export const Timer=()=>{
    const [timer,setTimer]=useState(5)
    const [counter,setCounter]=useState(0)
    const [flag,setFlag]=useState(true)
    const ref=useRef(null)
    useEffect(()=>{
       
       if(flag===false) {ref.current=setInterval(()=>{
           
            setCounter((value)=>{
              
                if(value===0){
                
                    return 59
                }
                return value-1
            })
        },1000)
        return
    }
        
    },[flag])

    useEffect(()=>{
       if(counter===59){
           setTimer(timer-1)
       }
       if(timer<0){
           clearInterval(ref.current)
       }
       return
    },[counter])
    return (<div className="button">
              <div className="data">
                <div >
              <h1>{timer>0 ? `${timer}m`:null}  {counter<10 ? `0${counter}`:counter}s</h1>
              </div>
              </div>
           {flag ? <button onClick={()=>setFlag(!flag)} className="blue">START</button>:null}
           {flag ? null:<button className="blue" onClick={()=>{
               clearInterval(ref.current)
               setFlag(!flag)
           }}>STOP</button>}

           <button className="none" onClick={()=>{clearInterval(ref.current);setFlag(flag ? flag:!flag);setTimer(5);setCounter(0)}}>RESET</button>
            </div>)
}