import React, { useEffect, useState } from 'react'
import BackButton from "./BackButton";
const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{setTime(time+1)},1000);
        return () => clearInterval(interval);
    },[time]);

    const handleReset = ()=>{
        setTime(0);
    }

  return (
    <>
    <BackButton />
    <div>Timer
        <h1>{time}</h1>
        <button onClick={handleReset}>
            Reset
        </button>
    </div>
    </>
    
  )
}

export default Timer