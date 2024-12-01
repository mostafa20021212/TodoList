import React, { useState } from "react";

export default function TodoInput({ handleAddTodos, value, setValue }) {
  const addTodos = () => {
    handleAddTodos(value);
    setValue("");
  };
  return (
    <herder>
      <input
        className="todoInput"
        type="text"
        placeholder="Enter todo..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="todobutton" onClick={() => value && addTodos()}>
        Add
      </button>
    </herder>
  );
}
