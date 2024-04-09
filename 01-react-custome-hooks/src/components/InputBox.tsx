import  { FC } from 'react'
import useCurrency from '../hooks/useCurrencyCodes';

interface Props{
  label: string;
  currency: number;
  setCurrency: (value: number) => void;
  countryCode: string;
  setCountryCode: (value: string) => void,
}

const InputBox:FC<Props> = ({
                            label, 
                            currency, 
                            setCurrency, 
                            countryCode, 
                            setCountryCode,
                          }) => {
  const countryCodeData = useCurrency();
  return (
    <div className='my-2'>
        <div>
            <p className='text-white my-2'>{label}</p>
        </div>
        <div className='flex justify-center items-center'>
            <input className='px-2 py-1 rounded-lg outline-none' 
            placeholder="0" value = {currency === 0 ? ' ':currency} type="number" onChange={(e)=>{setCurrency(Number(e.target.value))}}/>
            <select className='py-1.5 rounded-lg px-2 ml-3 outline-none' value={countryCode} onChange={(e)=>setCountryCode(e.target.value)} >
                {
                 Object.keys(countryCodeData).map((codes,index)=>(
                  <option key={index}>{codes}</option>
                 ))
                }
            </select>
        </div>
    </div>
  )
}

export default InputBox