
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Navbar} from './componants/Navbar/Navbar'
import {Men} from "./componants/mens_womens/men"
import {Home} from "./componants/home/home"
import {Women} from "./componants/mens_womens/women"
import {MenChild} from "./componants/child/mensChild"
import {Cart} from "./componants/cart/cart"
function App() {
  

  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>}/>
      <Route path="/mens/:id" element={<MenChild/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
  )
}

export default App
