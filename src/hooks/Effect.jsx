import React, { useState, useEffect } from 'react'
function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prev) => prev + 1);
        }, 1000);

    return () => clearInterval(interval);
}, []);
return <p>Seconds : {seconds}</p>
};

export default Timer;