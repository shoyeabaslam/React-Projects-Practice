import { FC, useState } from "react"
import { FormDataType } from "./Form"
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { useNavigate } from "react-router";

interface PropType{
    userData:FormDataType[],
    setUserData: React.Dispatch<React.SetStateAction<FormDataType[]>>
    searchTerm:string
}

const dataKeys = ['name','email','gender','skills']

export const Table:FC<PropType> = ({   
                            setUserData,   
                            userData,
                            searchTerm
                        }) => {
    const navigate = useNavigate();
    const [isAlphabeticalOrder,setIsAplphabetical] = useState(true)

    const handleSorting = ()=>{
        setUserData((prev) => {
          console.log(prev)
          const sortedData = [...prev]; 
          
          sortedData.sort((a, b) => {
              const name1 = a.name.toLowerCase();
              const name2 = b.name.toLowerCase();
              
              if(isAlphabeticalOrder){
                if (name1 < name2) return -1;
                if (name1 > name2) return 1;
              }else{
                if (name1 > name2) return -1;
                if (name1 < name2) return 1;
              }
              return 0; 
          });
      
          return sortedData; 
      });
      setIsAplphabetical((prev) => !prev)
    }

    //deleting the record
    const handleDelete = (id:string)=>{
        fetch(`http://localhost:3000/users/${id}`,{
          method:"DELETE",
          headers:{
            'Content-Type':'application/json'
          },
          
        }).then(()=>{
          const updatedUserData = userData.filter((user) => user.id !== id);
          setUserData(updatedUserData);
        })
        .catch((err)=>console.log(err))
      }
    
     //updating the record
      const handleUpdate = (id:string)=>{
        navigate(`/${id}`)
      }
                          
    //example:
    //const properties: (keyof FormDataType)[] = ['name', 'email', 'age'];
    //   interface obj{
    //     name:string,
    //     age:number,
    // }
    
    // const properties:('name'|'age')[] = ['name','age']
    // const p2:('name'|'age')[] = ['age','name']
    
      const filterByProperties = (data: FormDataType, properties: (keyof FormDataType)[], searchTerm: string): boolean => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return properties.some((prop) => data[prop]!.toLowerCase().startsWith(lowerSearchTerm));
      };
      
      const filteredUserData = userData.filter((data) =>
        filterByProperties(data, dataKeys, searchTerm)
      );
      
    return (
       <table className="w-full border-separate border-spacing-1 table-fixed">
        <thead>
            <tr >
               {
                dataKeys.map((items,index)=>(
                    <td className="border px-2 font-bold text-lg border-slate-900" key={index}>
                    {
                        items === 'name' ? <span className="flex items-center justify-between">{items}<BsArrowDown onClick={handleSorting} className={`${isAlphabeticalOrder ? 'rotate-180':'rotate-0'} cursor-pointer`} /></span> : items
                    }
                    </td>
                ))
               }
            </tr>
        </thead>
        <tbody>
            {
                filteredUserData.map((data)=>(
                    <tr key={data.id}>
                        {
                            dataKeys.map((items,index)=>(
                                <td className="border px-2 border-slate-900" key={index}>
                                    
                                 {
                                    items === 'skills' ? 
                                    <span className="flex items-center justify-between">{data[items]} 
                                    <div className="flex items-center space-x-2">
                                        <MdModeEdit className="cursor-pointer" onClick={()=> handleUpdate(data.id!)}/>
                                        <AiFillDelete className="cursor-pointer" onClick={()=>handleDelete(data.id!)}/>
                                    </div>                                    
                                    </span>:data[items]
                                 }
                                    
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
       </table>
    )
}


{/* <div key={data.id} className="grid border border-purple-300 py-1 px-2 my-2  grid-cols-4 gap-6 shadow-lg rounded-lg">
<div className="text-wrap">{data.name}</div>
<div className="text-wrap">{data.email}</div>
<div className="text-wrap">{data.gender}</div>
<div className="text-wrap flex justify-between">{data.skills}
    <div className="flex items-center">
        <MdModeEdit onClick={() => handleUpdate(data.id!)} className="mr-3 cursor-pointer " />
        <AiFillDelete onClick={() => handleDelete(data.id!)} className="mr-3 cursor-pointer " />
    </div>
</div>
</div> */}