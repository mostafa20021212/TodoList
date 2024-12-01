import React, { useState } from "react";

export default function TodoInput({ handleAddTodos, value, setValue }) {
  const addTodos = () => {
    handleAddTodos(value);
    setValue("");
  };
  const a = () => {};
  return (
    <herder>
      <input
        type="text"
        placeholder="Enter todo..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => value && addTodos()}>Add</button>
    </herder>
  );
}
