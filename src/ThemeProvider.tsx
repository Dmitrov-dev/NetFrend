import { type PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext, type ThemeType } from "./theme.context";



export function ThemeProvider({children}: PropsWithChildren){
    const [theme, setTheme] = useState<ThemeType>(() => localStorage.getItem('theme') as ThemeType || 'dark')

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => 
        setTheme(prev => (prev === 'dark' ? 'light': 'dark'))

    return (
        <ThemeContext.Provider value={{theme,
            toggleTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

