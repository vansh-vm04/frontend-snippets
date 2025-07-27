import "./App.css";
import { counter } from "./store/atom/counter";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { useEffect, useState } from "react";

function Counter(){
  const count = useRecoilValue(counter)
  return <span style={{margin:"20px"}}>
    Count : {count}
  </span>
}

function Increase(){
  const setCount = useSetRecoilState(counter)
  return <button onClick={()=>setCount(c=>c+1)}>
    Increase
  </button>
}

function Decrease(){
  const setCount = useSetRecoilState(counter)
  return <button onClick={()=>setCount(c=>c-1)}>
    Decrease
  </button>
}
const Counting = ({count})=>{
  return <div>
    {count}
  </div>
}

function Parent() {
  const [count, setcount] = useState(0)

  useEffect(() => {
    setInterval(setcount(count+1),200);
  }, [])
  
  return (
    <RecoilRoot>
      <Counter/>
      <Increase/>
      <Decrease/>
    </RecoilRoot>
  );
}

function App() {
  return (<div>
    <Parent/>
  </div>
  );
}


export default App;
