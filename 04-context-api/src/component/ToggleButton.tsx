    import sun from '../assets/sun.png'
    import moon from '../assets/moon.png'
    import { useContext, useRef, useState } from 'react'
    import { motion } from 'framer-motion'
    import ThemeContext from '../context/ThemeContext'

    const ToggleButton = ()=>{
        const imgRef = useRef(null)
        const {setIsDark} = useContext(ThemeContext);

        const [isToggle,setIsToggle] = useState(false)
        const handleIcons = ()=>{
            if(imgRef.current){
                const img = imgRef.current as HTMLImageElement;
                img.src = !isToggle?sun:moon;
            }
            setIsToggle((prev)=> !prev)
            setIsDark((prev)=>!prev);
        }
        return(
            <div onClick={handleIcons} className="w-[60px] select-none cursor-pointer bg-gradient-to-r from-slate-300 to-slate-600 shadow-sm border border-slate-400 p-1 rounded-full h-[25px] text-sm flex items-center">
            <motion.img
            animate={{
                transform:`${isToggle?"translateX(140%)":"translateX(0%)"}`,
                
            }} 
            ref={imgRef} className="h-[20px]" 
            src={moon}/>
            </div>
        )
    }

    export default ToggleButton