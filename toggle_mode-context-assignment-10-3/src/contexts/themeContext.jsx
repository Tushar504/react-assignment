import { createContext, useState } from "react";


export const ThemeContext=createContext()

export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState(true)
const toggle=(value)=>{
    setTheme(value)
}
    return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}