import React, { useState } from 'react';

const BackIcon = (props) => {
    // const {} = props;

    const { fill, setFill } = useState('#fff');
        
    const setStyle = () => {
        setFill('#297e6b');
    }
    
    return (
    <>
        <svg id="back-icon" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 34" height="50px">
                <path 
                id="back-icon-path"
                onMouseOver={setStyle}
                d="M20.12,31.72l-1.74,1.73a1.86,1.86,0,0,1-2.64,0L.55,18.32a1.86,1.86,0,0,1,0-2.64L15.74.55a1.86,1.86,0,0,1,2.64,0l1.74,1.73a1.87,1.87,0,0,1,0,2.67l-9.42,8.94H33.13A1.87,1.87,0,0,1,35,15.75v2.5a1.87,1.87,0,0,1-1.87,1.86H10.67l9.42,8.94A1.86,1.86,0,0,1,20.12,31.72Z" 
                transform="translate(0)" 
                style={{fill: {fill}}}/>
        </svg>
    </>
    );
}

export default BackIcon;