// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

interface Repository {
  id: number;
  name: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
}

const GithubProfile = () => {
  const data = useLoaderData() as Repository[]; // this is important converting data to repository type

    //----------------Unoptimised way to fetching when using react routes-------------------------
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shoyeabaslam/repos')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     });
    // },[])
  return (
    <div className="py-16">
        <div className="flex flex-wrap px-6 justify-center">
        {
           data && data.map((items,index)=>(
            <a href={items['html_url']} target="_blank" key={index} className="m-4 w-[300px] border p-6 border-gray-900 rounded">
               <div className="flex justify-between items-center">
                    <h2>{items['name']}</h2>
                    <img className="w-16 rounded-full" src={items['owner']['avatar_url']}/>
               </div>
            </a>
           ))
        }
        </div>
    </div>
  )
}

export default GithubProfile

export const getGitHubData = async ()=>{
  const res = await fetch('https://api.github.com/users/shoyeabaslam/repos');
  return res.json();
}