import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

export const Navbar=()=>{
    const {toggle}=useContext(ThemeContext)
    return <div style={{display:"flex",width:"100px",margin:"auto"}}>
        <button onClick={()=>toggle(true)}>Light</button>
        <button onClick={()=>toggle(false)}>Dark</button>
    </div>
}