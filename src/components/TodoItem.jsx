import React, { useState } from "react";
import { useTodo } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-gray-300 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-gray-800 ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <div
          className={`w-full ml-3 ${
            isTodoEditable ? "border-b border-dashed border-gray-400" : ""
          } ${todo.completed ? "line-through" : ""}`}
        >
          {isTodoEditable ? (
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
            />
          ) : (
            <p>{todoMsg}</p>
          )}
        </div>
      </div>
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faEdit} />
        )}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
        onClick={() => deleteTodo(todo.id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
}

export default TodoItem;
