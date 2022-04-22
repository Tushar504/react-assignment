import { createContext, useState } from "react";

export const ThemeContext=createContext()

export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("Light")

    const toggleTheme=(theme)=>{
        setTheme(theme)
    }
    return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
}