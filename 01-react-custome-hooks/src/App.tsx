import { FC, useState } from "react";
import { InputBox } from "./components/index";
import useCurrency from "./hooks/useCurrencyCodes";

const App:FC = ()=>{
  const [fromCurrency, setFromCurrency] = useState<number>(0);
  const [toCurrency, setToCurrency] = useState<number>(0);
  const [fromCountryCode, setFromCountryCode] = useState<string>('USD');
  const [toCountryCode, setToCountryCode] = useState<string>('USD');
  const currencyData = useCurrency();
  
  const handleCurrencyConversion = (e:React.FormEvent)=>{
    
    e.preventDefault();
    const toCurrenyValue = currencyData[toCountryCode].value;
    const actualCurrency = fromCurrency * toCurrenyValue;
    setToCurrency(Math.round(actualCurrency * 100)/100)
    console.log(currencyData[toCountryCode])
  }

  const handleSwap = () =>{
    setToCountryCode(fromCountryCode)
    setFromCountryCode(toCountryCode)
    setFromCurrency(toCurrency)
  }

  return (
    <div className="bg-gradient-to-t w-full min-h-screen flex justify-center items-center from-indigo-500 via-indigo-600 to-blue-900">
     <form onSubmit={(e)=>handleCurrencyConversion(e)} className=" p-8 rounded-lg backdrop-blur-xl bg-white/20 shadow-md">
      <div>
        <h1 className="text-xl font-bold text-center text-white">Currency Converter</h1>
      </div>
      <div>
        <InputBox 
            label="From"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            countryCode={fromCountryCode}
            setCountryCode={setFromCountryCode}
            
        />
        <div className="flex justify-center">
          <button className=" mt-4 px-3 py-1 rounded-lg text-white bg-indigo-700" onClick={handleSwap}>Swap</button>
        </div>
        <InputBox 
          label="To"
          currency={toCurrency}
          setCurrency={setToCurrency}
          countryCode={toCountryCode}
          setCountryCode={setToCountryCode}
          
        />
      </div>
      <button className="w-full py-1 bg-indigo-700 mt-4 rounded-lg text-white">Convert</button>
     </form>
    </div>
  )
}

export default App;