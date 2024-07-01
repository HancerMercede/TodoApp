import { useState } from "react";

export const TodoInput = (props) => {
  const { handleTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
