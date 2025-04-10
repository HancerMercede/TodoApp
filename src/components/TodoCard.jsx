import { useState } from "react";
import PropTypes from "prop-types";
import "animate.css";

export const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  const [complete, setComplete] = useState(false);

  return (
    <li
      className={`${
        complete ? "completed" : ""
      } todoItem animate__animated animate__fadeIn card`}
    >
      {children}
      <div className="actionsContainer">
        <button
          id={"Check"}
          onClick={() => {
            setComplete(true);
          }}
        >
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <button
          id={"Edit"}
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          id={"Delete"}
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
