import React, { useState } from "react";

const Parent = () => {
    const [words, setWords] = useState("");

    const handleClick = () => {
        setWords("Did you do your homework?");
    };

    return (
        <div data-testid='parent'>
            <h1>Parent</h1>
            <button data-testid='testbtn' onClick={handleClick}>Ask</button>
            <Child hears={words} />
        </div>
    );
}
export default Parent;

const Child = (props) => {
    return (
        <div data-testid='child'>
            <h2>Child</h2>
            <p data-testid='message'>{props.hears}</p>
        </div>
    );
}



