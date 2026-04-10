import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({theme: 'light' , ToggleTheme : () => {}})

export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState('light')

    useEffect(() =>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme)
        }
    } , [])

    const ToggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme' , theme === 'light' ? 'dark' : 'light')
    }

    return (
        <AppContext.Provider value={{ theme, ToggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}