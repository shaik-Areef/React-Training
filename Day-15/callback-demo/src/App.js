import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./customHook";
import Todos from "./Todos";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);

  // console.log('App call');
  // const increment = () => {

  //   setCount((c) => c + 1);
  // };
  // const addTodo = useCallback(() => {    //apply UseCallback to aviod update to child component
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  return (
    <>
      {/* <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
      <Home/>
    </>
  );
};

export default App;
