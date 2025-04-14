import { TodoCard } from "./TodoCard";
import PropTypes, { string } from "prop-types";

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard {...props} key={index} index={index}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(string).isRequired,
};
