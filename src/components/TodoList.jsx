import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDeteleTodo, handleEditTodo }) {
  return (
    <>
      {todos.map((todo, _) => {
        return (
          <TodoCard
            key={_}
            todo={<p>{todo}</p>}
            handleDeteleTodo={handleDeteleTodo}
            handleEditTodo={handleEditTodo}
            index={_}
          />
        );
      })}
    </>
  );
}
