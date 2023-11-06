import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">active task</span>
        {todos.map((todo, index) => (
          <SingleTodo
            index={index}
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
