
import './App.css'
import { New } from './pages/new_restraurant';
import { Restraurants } from './pages/restraurants';
import {Routes,Route} from "react-router-dom";
import {Navbar} from "./pages/Navbar"
function App() {
  

  return (
    <div className="App">
        <Navbar/>
        <Routes>
      <Route path="/" element={<Restraurants />} />
      <Route path="/add" element={<New />} />
     
    </Routes>
         
    </div>
  )
}

export default App
