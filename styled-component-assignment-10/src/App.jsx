
import { useState } from 'react';
import './App.css';
import {Button} from './componants/Button'
function App() {
  const [change,setChange]=useState(true)
  const [color,setColor]=useState("Black")
  return (
    <div className="App">
        <h1>color:{color}</h1>
       <Button state={change} onClick={()=>{setChange(!change);setColor(color==="Black" ? "Red":"Black")}} >Click</Button>
    </div>
  );
}

export default App;
