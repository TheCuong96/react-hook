import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


function colorRandom(colorCurrent){
    const COLORLIST = ['green','red','blue','yellow'];

    // const random = Math.trunc(Math.random() * 4);
    const colorRefIndex = COLORLIST.indexOf(colorCurrent)
    
    // let random = Math.trunc(Math.random() * 4);
    let random = colorRefIndex;
    while(random === colorRefIndex){
         random = Math.trunc(Math.random() * 4);
    }
    console.log(COLORLIST[random]);
    return COLORLIST[random];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')
    useEffect(() => {
        const timeOutColor = setInterval(() =>{
            const newColor = colorRandom(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        },1000)
        return () => {
            clearInterval(timeOutColor);
        };
    }, []);

    return color;
}

export default useMagicColor;