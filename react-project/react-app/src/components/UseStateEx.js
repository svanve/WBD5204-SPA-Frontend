import React, { useState } from 'react';

const useStateEx = () => {

    const [ count, setCount ] = useState(10);

    function decrementCount() {
        setCount( prevCount => {
            return prevCount -1000;
        })
    }

    function incrementCount() {
        setCount( prevCount => {
            return prevCount +1000; 
        })
    }
    
    return (
    <div>
        <button onClick={decrementCount}> - </button>
        <span>  {count}  </span>
        <button onClick={incrementCount}> + </button>
    </div>
    );
}

export default useStateEx;