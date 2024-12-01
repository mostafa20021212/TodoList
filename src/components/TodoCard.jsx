import React from "react";

export default function TodoCard({
  todo,
  handleDeteleTodo,
  handleEditTodo,
  index,
}) {
  return (
    <>
      <li className="todoItem">
        {todo}
        <div className="actionsContainer">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => handleEditTodo(index)}
          ></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDeteleTodo(index)}
          ></i>
        </div>
      </li>
    </>
  );
}
