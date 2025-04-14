import { useRef, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";

export const TodoInput = (props) => {
  const { handleTodos, todoValue, setTodoValue } = props;

  const handleInput = () => {
    if (todoValue === "" || todoValue === "Enter todo...") return;
    handleTodos(todoValue);
    setTodoValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (todoValue === "" || todoValue === "Enter todo...") return;
      if (todoValue) {
        handleTodos(todoValue);
        setTodoValue("");
      }
    }
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
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Enter todo..."
        ref={InputElement}
      />
      <button
        onClick={() => {
          handleInput();
        }}
      >
        <IoAddCircleOutline fontSize={20} />
      </button>
    </header>
  );
};

TodoInput.propTypes = {
  handleTodos: PropTypes.func,
  todoValue: PropTypes.string,
  setTodoValue: PropTypes.func,
};
