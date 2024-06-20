import { ChangeEvent, FC, useRef, useState } from "react"
import { Action } from "../types/actions"
import { easeInOut, motion } from "framer-motion"


interface ToDoType{
    id:number,
    text:string,
    shade:string,
    bgColor:string,
    dispatch:React.Dispatch<Action>
}



const DisplayTodo:FC<ToDoType> = ({text,shade,bgColor,dispatch,id}) => {
    const textRef = useRef(null)
    const [displayText,setDisplayText] = useState(text);
    const [isEdited,setIsEdited] = useState(false);

    const handleCheckBoxChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(textRef.current){
            const text = textRef.current as HTMLDivElement
            e.target.checked ? text.style.textDecorationLine='line-through':text.style.textDecoration='none'
        }
    }

    const handleUpdate = ()=>{
        if(!isEdited){
            setIsEdited(prev=>!prev);
        }
        if(isEdited){
            dispatch({
                type:'update_todo',
                id:id,
                nextDraft:displayText
            })
            setIsEdited(prev=>!prev)
        }
    }

    
    return (
        <motion.div 
        initial={{transform:'translateY(-20px)'}}
        animate={{
            transform:'translateY(0)'
        }}
        transition={{duration:0.5, ease:easeInOut}}
        className='w-[88%] '>
            <div className={`${bgColor} px-2 py-5 border  border-slate-900 relative todo_dispay_wrapper mb-6`}>
                <div className='flex items-center justify-between'>
                    <div>
                        <input className="scale-[1.5] ml-3" type='checkbox' onChange={handleCheckBoxChange} value={1}  />
                    </div>
                    <input type="text" className={`p-2 outline-none bg-transparent  ${isEdited && 'border-black border'} rounded-sm w-full mx-4 `} ref={textRef} value={displayText} readOnly={!isEdited} onChange={(e)=>setDisplayText(e.target.value)}/>
                
                    <div className="flex flex-col space-y-2">
                        <button onClick={handleUpdate} className='bg-blue-500 text-white text-sm p-1 rounded'>Update</button>
                        <button onClick={()=>dispatch({type:'delete_todo',id:id})} className='bg-rose-500 text-white text-sm p-1 rounded'>Delete</button>
                    </div>
                </div>
                <div className={`w-[10px] h-[30px] border border-slate-900 ${shade} absolute -top-4 left-5`} />
                <div className={`w-[10px] h-[30px] border border-slate-900 ${shade} absolute -top-4 right-5`} />
            </div>

        </motion.div>
    )
}

export default DisplayTodo