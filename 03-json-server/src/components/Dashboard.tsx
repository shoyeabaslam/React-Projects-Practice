import { useEffect, useState } from "react"
import { FormDataType } from "./Form";
import { useNavigate } from "react-router";
import { Table } from "./table";
import { Link } from "react-router-dom";



const Dashboard = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState<FormDataType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(()=>{
    fetch('http://localhost:3000/users').then((res)=>res.json())
    .then((data)=>setUserData(data))
    .catch((err)=>console.log(err));
  },[])


  const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

 
  return (
    <div className="flex flex-col px-10  justify-center items-start w-full min-h-screen bg-gradient-to-r from-purple-200 to-purple-400">
        <h1 className="text-2xl font-bold">User Data:</h1>
       <div className="flex justify-between w-full items-center">
          <div className="flex items-center">
              <input type="text" className="my-3 px-2 py-1 bg-transparent border border-purple-400 rounded-lg outline-none" placeholder="Enter to search..." onChange={handleFiltering} />
              <button className=" py-1 rounded-lg ml-1 text-white px-3 bg-purple-500">Search</button>
          </div>
          <Link to={'/'} className="ml-2 border border-slate-900 py-1 px-2 rounded-lg">Add Data</Link>
       </div>
       <Table userData={userData} setUserData={setUserData}  searchTerm={searchTerm} />
    </div>
  )
}

export default Dashboard