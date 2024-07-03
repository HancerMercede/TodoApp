import { useState } from "react";
import PropTypes from "prop-types";

export const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  const [complete, setComplete] = useState(false);
  return (
    <li className={`${complete ? "completed" : ""} todoItem`}>
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            setComplete(true);
          }}
        >
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

TodoCard.propTypes = {
  children: PropTypes.element,
  handleDeleteTodo: PropTypes.func,
  handleEditTodo: PropTypes.func,
  index: PropTypes.number,
};
