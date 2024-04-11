// import axios from "axios";
import { FormEvent, useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router"

export interface FormDataType{
  id?:string,
  name:string,
  email:string,
  gender:string,
  skills:string
}

const Form = ()=>{
  const [formData,setFormData] = useState<FormDataType>({
    name:"",
    email:"",
    gender:"",
    skills:"DSA"
  })
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=>{
    if(params.paramId){
      fetch(`http://localhost:3000/users/${params.paramId}`)
              .then(res =>res.json())
              .then((data:FormDataType) =>{
                setFormData(data)
              })
              .catch((err)=>console.log(err))
            }
    return;
  },[params.paramId])

  const handleFormSubmission = (e:FormEvent)=>{
    e.preventDefault()
    // axios.post('http://localhost:3000/users',formData).then(()=>{
    //   console.log("send successfully")
    // }).catch((e:Error)=>{
    //   console.log(e)
    // })

    if(params.paramId){
      //update the user
      fetch(`http://localhost:3000/users/${params.paramId}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      }).then(()=>navigate('/dashboard'))
      .catch((err)=>console.log(err))
    }
    else{
      fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify(formData)
      }).then(()=>{
        navigate('/dashboard')
      })
      .catch((e)=>console.log(e))
    }
  }
  const handleFormData = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return(
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-200 to-purple-400 flex justify-center items-center">
      <form className="backdrop-blur-lg shadow-md px-4 w-[300px] bg-white/40 rounded-lg">
        <h1 className="text-xl font-bold text-slate-950 mt-2 text-center">Register</h1>
        <div className="bg-slate-950 my-2 h-0.5 rounded-full w-full"/>
        <div className="flex flex-col my-2 space-y-2">
          <label className="font-">Name:</label>
          <input onChange={handleFormData} name="name" value={formData.name} className="bg-slate-100 rounded shadow-md px-1 outline-none py-0.5" type="text"/>
        </div>
        <div className="flex flex-col my-2 space-y-2">
          <label className="font-">Email:</label>
          <input onChange={handleFormData} name="email" value={formData.email} className="bg-slate-100 rounded shadow-md px-1 outline-none py-0.5" type="email"/>
        </div>
        <div className="flex flex-col my-2 space-y-2">
          <label className="font-">Gender:</label>
          <div className="flex w-full space-x-8">
            <input onChange={handleFormData} name="gender" checked={formData.gender === 'male'} value='male' className="" type="radio"/>Male
            <input onChange={handleFormData} name="gender" checked={formData.gender === 'female'} value='female' className="" type="radio"/>Female
            <input onChange={handleFormData} name="gender" checked={formData.gender === 'other'} value='other' className="" type="radio"/>Other
          </div>
        </div>
        <div className="flex flex-col my-2 space-y-2">
          <label className="font-">Skills:</label>
          <select onChange={handleFormData} name="skills" value={formData.skills} className="outline-none shadow-md rounded py-0.5">
            <option>
              DSA
            </option>
            <option>
              React
            </option>
            <option>
              Next
            </option>
          </select>
        </div>
        <button onClick={handleFormSubmission} className="my-2 border-none w-full text-white rounded-md shadow-md bg-purple-600 py-0.5">Submit</button>
      </form>
    </div>
  )
}
export default Form;