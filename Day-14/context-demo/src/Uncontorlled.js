import React, { useRef } from "react";

const ExampleForm = () => {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current);
        console.log(inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button>Submit</button>
        </form>
    );
}

export default ExampleForm;