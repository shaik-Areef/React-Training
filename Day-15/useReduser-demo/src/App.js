import logo from './logo.svg';
import './App.css';
import Todos from './todos';
import ToDos1 from './Todo1';

function App() {
  return (
    <div className="App">
      <div>with useReducer: <Todos /></div>
      <div> with useState: <ToDos1 /></div>
    </div>
  );
}

export default App;
