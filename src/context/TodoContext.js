import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // property
  todos: [
    {
      todo: "todo msg",
      id: 1,
      completed: false,
    },
  ],
  //functinalities
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
  toggleComplete: (todo) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
