import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

const Chat = () => {
    const [msg, setmsg] = useState(["Msg","Hello"]);
    const chatRef = useRef(null);
    const addMsg = ()=>{
        setmsg((msgs) => [...msgs,"Hello"])
    }
    useEffect(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [msg])
    
  return <>
    <div ref={chatRef}
     style={{width:"80vw",scrollbarWidth:"0px", height: "80vh",scrollBehavior:'smooth',overflow:"scroll",borderRadius:"20px"}}>
        {msg.map((m,i)=>(
            <h1 key={i} style={{color:"white"}}>{m}</h1>
        ))}
    </div>
    <button onClick={()=>addMsg()}>Add msg</button>
    </>
}

export default Chat