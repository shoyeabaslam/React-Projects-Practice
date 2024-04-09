import { useEffect, useState } from "react";

interface ResponseType {
    data: {
        [key:string]:{
            code:string,
            value:number
        }
    }
}


const useCurrency = ()=>{
    const [data,setData] = useState<ResponseType>({data:{}});
    useEffect(()=>{
        fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_OOsJnrfNP0xK3DYMfdBjh5yeN4WGwNt6RohOkohc&currencies').then((res)=> res.json()).then((data)=>{
            setData(data)
        })
    },[])   
    return data.data
}

export default useCurrency