import { createContext } from "react";


interface Type{
    isDark:boolean | null,
    setIsDark:React.Dispatch<React.SetStateAction<boolean | null>>
}

const initialValue = {
    isDark:false,
    setIsDark: ()=>{}
}

const ThemeContext = createContext<Type>(initialValue)

export default ThemeContext;