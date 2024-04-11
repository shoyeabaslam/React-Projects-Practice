import { useEffect, useState } from "react"
import { FormDataType } from "./Form";
import { BsArrowDown } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import { AiFillDelete } from "react-icons/ai";



const Dashboard = () => {
  const [userData,setUserData] = useState<FormDataType[]>([]);
  const [isAlphabetical,setIsAplphabetical] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  useEffect(()=>{
    fetch('http://localhost:3000/users').then((res)=>res.json())
    .then((data)=>setUserData(data))
    .catch((err)=>console.log(err));
  },[])

  const handleRecordDelete = (id:string)=>{
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

  const handleSorting = ()=>{
      setUserData((prev) => {
        console.log(prev)
        const sortedData = [...prev]; 
        
        sortedData.sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();
            
            if(isAlphabetical){
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

  const handleUpdate = (id:string)=>{
    navigate(`/${id}`)
  }

  const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  //filtering of the values
  const filteredUserData = userData.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-purple-200 to-purple-400">
      <div>
        <h1 className="text-2xl font-bold">User Data:</h1>
        <div className="flex items-center">
        <input type="text" className="my-3 px-2 py-1 bg-transparent border border-purple-400 rounded-lg outline-none" placeholder="Enter to search..." onChange={handleFiltering} />
        <button className=" py-1 rounded-lg ml-1 text-white px-3 bg-purple-500">Search</button>
        </div>
        <div className="grid grid-cols-4 gap-4 border border-purple-300 p-2 font-bold shadow-lg rounded-lg">
          <div className="flex justify-between items-center pr-4">Name <BsArrowDown onClick={handleSorting} className={`cursor-pointer ${isAlphabetical ? 'rotate-180':'rotate-0'}`}/></div>
          <div>Email</div>
          <div>Gender</div>
          <div>Skill</div>
        </div>
        {
          filteredUserData.map((data)=>(
            <div key={data.id} className="grid border border-purple-300 py-1 px-2 my-2  grid-cols-4 gap-6 shadow-lg rounded-lg">
              <div className="text-wrap">{data.name}</div>
              <div className="text-wrap">{data.email}</div>
              <div className="text-wrap">{data.gender}</div>
              <div className="text-wrap flex justify-between">{data.skills} 
                <div className="flex items-center">
                    <MdModeEdit onClick={()=>handleUpdate(data.id!)} className="mr-3 cursor-pointer "/>
                    <AiFillDelete onClick={()=>handleRecordDelete(data.id!)} className="mr-3 cursor-pointer "/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard