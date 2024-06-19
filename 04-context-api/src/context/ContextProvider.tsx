import { FC, ReactNode, useState } from "react"
import ThemeContext from "./ThemeContext";


interface Type {
    children: ReactNode
}

const ContextProvider:FC<Type> = ({children})=>{
    const [isDark,setIsDark] = useState<boolean | null>(false);
    return(
        <ThemeContext.Provider value={{isDark,setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider;