import { useState } from "react"

const ToDos1 = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Todo 1",
            complete: false,
        },
        {
            id: 2,
            title: "Todo 2",
            complete: false,
        },
    ]);

    const handleComplete = (todo) => {
        let action = todo.id;
        let updateToDos = todos.map((todo) => {
            if (todo.id === action) {
                return { ...todo, complete: !todo.complete };
            } else {
                return todo;
            }
        })
        setTodos(updateToDos);

    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}

        </div>
    )
}
export default ToDos1