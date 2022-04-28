import { Link } from "react-router-dom"
import "./navbar.css"
export const Navbar=()=>{
    return <div>
        
       <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
    
    </div>
}