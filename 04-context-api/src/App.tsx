import { useContext } from "react";
import Card from "./component/Card"
import ToggleButton from "./component/ToggleButton";
import ThemeContext from "./context/ThemeContext";

const App = ()=>{
  const {isDark} = useContext(ThemeContext);
  return(
    <div className={`flex justify-center flex-col space-y-5 items-center h-screen ${!isDark ? 'bg-slate-300':'bg-slate-700'}`}>
      <ToggleButton/>
      <Card/>
    </div>
  )
}

export default App