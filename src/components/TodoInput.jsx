import { useEffect } from "react";
import { useRef } from "react";

export const TodoInput = (props) => {
  const { handleTodos, todoValue, setTodoValue } = props;

  const handleInput = () => {
    if (todoValue === "" || todoValue === "Enter todo...") return;
    handleTodos(todoValue);
  };

  const InputElement = useRef(null);

  useEffect(() => {
    if (InputElement.current) {
      InputElement.current.focus();
    }
  }, [handleTodos]);

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Enter todo..."
        ref={InputElement}
      />
      <button
        onClick={() => {
          handleInput();
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
