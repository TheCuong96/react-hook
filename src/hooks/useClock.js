import React, { useEffect, useState } from 'react';


function useClock(props) {

    const [timeString, setTimeString] = useState('');

    function TimeDetail(now){
        const hours = `0${now.getHours()}`.slice(-2);
        const minutes = `0${now.getMinutes()}`.slice(-2);
        const seconds = `0${now.getSeconds()}`.slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        const clockIterval = setInterval(() => {
          const now = new Date();
          const timeChange = TimeDetail(now);
            setTimeString(timeChange);
        }, 1000);
        return () => {
            console.log("clearInterval");
            clearInterval(clockIterval)
        }
    }, [])

    return {timeString};
}

export default useClock;