import { TodoCard } from "./TodoCard";
import PropTypes, { object } from "prop-types";

export const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard {...props} key={index} index={index} id={todo.id} todo={todo}>
          <p>{todo.text}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(object).isRequired,
};
