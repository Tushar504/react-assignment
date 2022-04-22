import { useContext } from "react"
import { ThemeContext } from "../contexts/themecontext"

export const Navbar=()=>{
    const {toggleTheme}=useContext(ThemeContext)
    return <div style={{display:"flex",width:"100px",margin:"auto"}}>
        <button onClick={()=>toggleTheme("Light")
        }>Light</button>
        <button onClick={()=>toggleTheme("Dark")}>Dark</button>
    </div>
}