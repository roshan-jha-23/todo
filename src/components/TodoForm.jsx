import React, { useState } from "react";
import { useTodo } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border rounded-lg px-3 outline-none py-2 text-gray-700"
      />
      <button
        type="submit"
        className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export default TodoForm;
