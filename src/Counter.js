import React, { useState } from "react";

function Counter() {
    const [countValue, setCountValue] = useState(0);

    const handleIncrement = () => {
        setCountValue(countValue + 1);
    }

    const handleDecrement = () => {
        if(countValue > 0)  {
            setCountValue(countValue - 1);
        }
    }

    return(
        <div>  
            <h1>Counter App</h1> 
            <p>{countValue}</p>
            <button onClick={handleIncrement} style={{marginRight: '5px'}}>
                Increment
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;