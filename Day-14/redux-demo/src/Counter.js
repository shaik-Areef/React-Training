import {createStore} from 'redux';
//action types
//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//action creators
function increment() {
    return { type: INCREMENT };
}
function decrement() {
    return { type: DECREMENT };
}

//reducer
function reducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

//store
var store = createStore(reducer, enableDevTools());

function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default function logState() {
    console.log(store.getState().toString());
}

store.subscribe(logState);

store.dispatch({ type: '' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());