import { useState ,createContext, useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BulbContext = createContext();

function App() {
  const [bulbOn, setbulbOn] = useState(true);

  return (
    <>
    <BulbContext.Provider value={{bulbOn:bulbOn, setbulbOn:setbulbOn}}>
      <LightBulb></LightBulb>
      </BulbContext.Provider>
    </>
  )
}

function LightBulb(){
  return <div>
    <BulbState></BulbState>
    <ToggleBulbState></ToggleBulbState>
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState(){
  const {setbulbOn} = useContext(BulbContext)
  return <div>
    <button onClick={()=>setbulbOn(curr=>!curr)}>Toggle Bulb</button>
    </div>
}
export default App
