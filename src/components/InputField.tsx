import React, { useRef } from "react";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="" onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur()
    }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Add task"
        className="input__box"
      />
      <button type="submit" className="input__submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
