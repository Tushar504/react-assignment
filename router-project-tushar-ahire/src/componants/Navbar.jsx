

import { Link } from "react-router-dom";

import "./Navbar.css"
export const Navbar=()=>{
  return <div className="links">
        <Link to="/"><button>Home</button></Link>
        <Link to="/men"><button>Mens</button></Link>
        <Link to="/women"><button>Womens</button></Link>
    
  </div>
}