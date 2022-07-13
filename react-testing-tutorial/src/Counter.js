
import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => 
        // {
        //     if (prevCounter === 10) {
        //         console.log(prevCounter);
        //     }
        //     return prevCounter + 1;
        // });
        prevCounter + 1)
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };
    const resetCounter = () => {
        setCounter((prevCounter) => 0)
    };

    return (
        <>
            <button data-testid="increment" onClick={incrementCounter}>
                +
            </button>
            <p data-testid="counter">{counter}</p>
            <button data-testid="decrement" onClick={decrementCounter}>
                -
            </button>
            <button data-testid='reset' onClick={resetCounter}>
                Reset
            </button>
        </>
    );
};

export default Counter;