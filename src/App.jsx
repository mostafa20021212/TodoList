import { useEffect, useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const persistData = (newTodo) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodo }));
  };
  const [value, setValue] = useState("");
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDetletTodo(i) {
    const newTodo = todos.filter((todo, _) => _ !== i);
    persistData(newTodo);
    setTodos(newTodo);
  }
  function handleEditTodo(i) {
    const editValue = todos[i];
    setValue(editValue);
    handleDetletTodo(i);
  }

  useEffect(() => {
    if (!localStorage) return;
    let localTodo = localStorage.getItem("todos");
    //f (!localTodo) return;
    localTodo = JSON.parse(localTodo).todos;
    setTodos(localTodo);
  }, []);
  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        value={value}
        setValue={setValue}
      />
      <TodoList
        todos={todos}
        handleDeteleTodo={handleDetletTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
