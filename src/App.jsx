import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const todoItems = [{ id: "", text: "", completed: false }];
  const [todos, setTodos] = useState(todoItems);
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todolist")));
  }, []);

  // Here i call the item todolist in the localstorage
  const todolist = JSON.parse(localStorage.getItem("todolist"));

  // and here i knnow this key doesn't exist so i create it.
  if (!todolist) {
    localStorage.setItem("todolist", JSON.stringify([]));
  }

  const handleTodos = (newTodo) => {
    console.log(newTodo);
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem("todolist", JSON.stringify([...todos, newTodo]));
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, Todoindex) => {
      return Todoindex != index;
    });

    setTodos(newTodoList);
    localStorage.setItem("todolist", JSON.stringify(newTodoList));
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited.text);
    handleDeleteTodo(index);
  };

  const handleCompleted = (id) => {
    const itemCompleted = todos.find((item) => item.id === id);

    const newItemCompleted = todos.filter((item) => {
      return item.id != itemCompleted.id;
    });

    itemCompleted.completed = true;

    localStorage.setItem(
      "todolist",
      JSON.stringify([...newItemCompleted, itemCompleted])
    );
  };
  // Extrating the todo text of the array to pass it to the todo list component
  // const items = todos.map((todo) => todo.text);
  return (
    <>
      <TodoInput
        handleTodos={handleTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        CompletedTodo={handleCompleted}
      />
    </>
  );
}

export default App;
