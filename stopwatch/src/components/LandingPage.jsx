import React from "react";
import { useState, useEffect ,useRef} from "react";
import Time from "./Time";
import { Card } from "./Card";

const LandingPage = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [clock, setclock] = useState(false);
  const interval = useRef(null)
  
  useEffect(()=>{
    if(clock){
        interval.current = setInterval(()=>{
            setSecond(curr=>curr+1);
        },1000);
    }else{
        clearInterval(interval.current);
    }
  },[clock])
  useEffect(() => {
    if(second==60){
        setMinute(prev=>prev+1)
        setSecond(0)
    }
  }, [second]);
  useEffect(() => {
    if(minute==60){
        setHour(prev=>prev+1);
        setMinute(0);
    }
  }, [minute]);
  useEffect(() => {
    if(hour==24) setHour(0);
  }, [hour]);

  const start = () => {
    setclock(clock => !clock);
  };

  const reset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setclock(false);
  }

  return (
    <Card>
    <div>
      <span style={{ color: "white" , fontSize:"2rem", fontFamily:"serif"}}>StopWatch</span>
      <Time hour={hour} second={second} minute={minute}></Time>
      <button onClick={() => start()}>Start-Stop</button>
      <button style={{marginLeft:"6px"}} onClick={() => reset()}>Reset</button>
    </div>
    </Card>
  );
};

export default LandingPage;
