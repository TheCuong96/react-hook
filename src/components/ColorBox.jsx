
import PropTypes from 'prop-types';

import { useState } from 'react';

ColorBox.propTypes = {
    
};

function randomColor() {
    const colorList = ['yellow','green','blue','red','black'];
    let random = Math.trunc(Math.random() * 5);
    
    return colorList[random];
}

function ColorBox() {
    
    const [color, setColor] = useState(() =>{
        const initialColor = localStorage.getItem('colorPrensent') || "green";
        return initialColor;
    });

    function clickChangeColor () {
        const changeColor = randomColor();
        setColor(changeColor);
        localStorage.setItem('colorPresent',changeColor)    ;
        return changeColor;
    }
    return (
        <div 
            className="color-box" 
            style={{backgroundColor:color}}
            onClick={clickChangeColor}
            >
            ahihi
        </div>
    );
}

export default ColorBox;