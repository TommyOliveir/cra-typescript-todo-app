import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete,} from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  return (
    <form action="" className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          {" "}
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;