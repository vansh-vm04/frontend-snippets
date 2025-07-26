import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'

//custom hook
function useCounter(){
  const [count, setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count+1);
  }

  return {
    count:count,
    increaseCount:increaseCount
  }
}

function App() {
  const [currentPost, setcurrentPost] = useState(1)
  const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/"+currentPost)

  if(loading) return <div>Loading...</div>;

  return (
   <div>
    <span style={{color:"white"}}>{data.title}</span>
    <Counter/>
    <button onClick={()=>setcurrentPost(1)}>post 1</button>
    <button onClick={()=>setcurrentPost(2)}>post 2</button>
   </div>
  )
}

function Counter(){
  //using custom hook
  const {count,increaseCount} = useCounter();
  const prev = usePrev(count);
  return <>
  <button onClick={increaseCount}>Increase {count}</button>
  <span>Prev value was : {prev}</span>
  </>
}

export default App
