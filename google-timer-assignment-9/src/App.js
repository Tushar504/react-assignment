
import './App.css';
import {Timer} from './componants/timer'
import {Stopwatch} from './componants/stopwatch'
import { useState } from 'react';
function App() {
  const [show,setShow]=useState(true)
 
  return (
    <div className="App">
      <div className='show'>
      <button onClick={()=>setShow(show ? show:!show)}>TIMER</button>
      <button onClick={()=>setShow(show ? !show:show)}>STOPWATCH</button>
      </div>
     
      {show ?<div>
     
     <Timer></Timer>
     </div>:null}
     {show ? null:<div>
       <Stopwatch></Stopwatch>
     </div>}

    </div>
  );
}

export default App;
