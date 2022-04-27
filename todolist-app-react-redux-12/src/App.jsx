
import './App.css'
import {Routes,Route} from "react-router-dom";
import {Home} from "./componants/home"
import {Todo} from "./componants/todo"
function App() {
 

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<Todo />} />
    
    </Routes>
          
    </div>
  )
}

export default App
