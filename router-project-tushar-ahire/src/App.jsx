
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Navbar} from './componants/Navbar'
import {Men} from "./componants/men"
import {Home} from "./componants/home"
import {Women} from "./componants/women"
import {MenChild} from "./componants/mensChild"
function App() {
  

  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>}/>
      <Route path="/mens/:id" element={<MenChild/>}/>
    </Routes>
    </div>
  )
}

export default App
