import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

//action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';

//action creators
function increment(name) {
    return {
        type: ADD_TODO,
        payload: { test: name }
    };
}
function decrement() {
    return { type: DECREMENT };
}



export default function Counter() {
    const reduxState = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <div>Count: {reduxState.counter}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

// export default function logState() {
//     console.log(store.getState().toString());
//     // const [name, setName] = useState();
//     return (
//         <div>
//             {/* <input onChange={(event) => setName(event.target.value)} /> value={name} */}
//             <button onClick={() => store.dispatch(increment("areef"))}>Increment</button>
//             <button onClick={() => store.dispatch(decrement())}>Decrement</button>
//         </div>
//     )
// }

// store.subscribe(logState);

// store.dispatch({ type: '' });
// store.dispatch(increment());
// // store.dispatch(increment());
// // store.dispatch(decrement());
// // store.dispatch(decrement());
// // store.dispatch(decrement());
// // store.dispatch(decrement());