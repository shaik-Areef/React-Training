import React, { useState } from "react";

const Parent1 = () => {
    const [words, setWords] = useState("");


    const handleRequest = (request) => {
        if (request.includes("car")) {
            setWords('set by Child');
        }
    };

    return (
        <div data-testid="parent1">
            <h1>Parent</h1>
            <p data-testid='message1'> {words}</p>
            <Child1  onRequest={handleRequest} />
        </div>
    );
}
export default Parent1;

const Child1 = (props) => {
    const handleClick = () => {
        props.onRequest("Can I have the car?");
    };
    return (
        <div data-testid='child1'>
            <h2>Child</h2>
            <button data-testid='childBtn1' onClick={handleClick}>Ask for the car</button>
        </div>
    );
}



