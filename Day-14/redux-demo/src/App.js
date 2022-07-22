import logo from './logo.svg';
import './App.css';
import LogState, { ADD_TODO, DECREMENT, INCREMENT } from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';


//store
var store = createStore(reducer, enableDevTools());

function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

//reducer
function reducer(state = { counter: 10 }, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, dataformComponent: action.payload }
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
