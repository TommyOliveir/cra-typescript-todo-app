import { useState } from "react";
import { Todo } from "./model";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";


function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo("");
  }
  // console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* {todos.map((item) =><p>{item.todo}</p>)} */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
}

export default App;
