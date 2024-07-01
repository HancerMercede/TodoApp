export const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <buttons
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </buttons>
      </div>
    </li>
  );
};
