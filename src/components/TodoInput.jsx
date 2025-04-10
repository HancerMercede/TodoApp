import { useRef, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
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
        <IoAddCircleOutline fontSize={20} />
      </button>
    </header>
  );
};
