export const TodoInput = (props) => {
  const { handleTodos, todoValue, setTodoValue } = props;

  const handleInput = () => {
    if (todoValue === "" || todoValue === "Enter todo...") return;
    handleTodos(todoValue);
  };

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
          handleInput();
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
