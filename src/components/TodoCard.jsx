import PropTypes from "prop-types";
import "animate.css";
import { useState } from "react";
import Draggable from "react-draggable";

export const TodoCard = (props) => {
  const [completed, setCompleted] = useState(false);

  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  const handleCompleted = () => {
    setCompleted(true);
  };

  return (
    <>
      <Draggable>
        <li
          className={`${
            completed ? "completed" : ""
          } todoItem animate__animated animate__fadeIn card `}
        >
          {children}
          <div className="actionsContainer">
            <button
              id={"Check"}
              onClick={() => {
                handleCompleted();
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
      </Draggable>
    </>
  );
};

TodoCard.propTypes = {
  children: PropTypes.element,
  handleDeleteTodo: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleComplete: PropTypes.func,
  index: PropTypes.number,
  completed: PropTypes.bool,
};
