import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0)
  const change=(value)=>{
    if(counter+value>=0){
    setCounter(counter+value)
    }
    
  }
  return (
    <div className="App">
      
       <h2>Counter</h2>
       <h3 className={counter%2===0 ? "red":"blue"}>{counter}</h3>
       <button  onClick={()=>change(1)}>+</button>
       <button onClick={()=>change(-1)}>-</button>
       <button onClick={()=>setCounter(counter*2)}>double</button>
    </div>
  );
}

export default App;
