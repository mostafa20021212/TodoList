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
          <button onClick={() => handleEditTodo(index)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeteleTodo(index)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
}
