import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Localstorage key.
 */
const TODO_KEY = "figmaTodosApp";

/**
 * @typedef Todo
 * @property {string} title
 * @property {string} subtitle
 * @property {boolean} completed
 * @property {number} id
 */

// PUBLIC_INTERFACE
const TodoContext = createContext();

/**
 * Grab todos from localStorage.
 */
function getTodos() {
  try {
    return JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  } catch {
    return [];
  }
}

/**
 * Set todos to localStorage.
 */
function setTodos(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

// PUBLIC_INTERFACE
export function TodoProvider({ children }) {
  /**
   * All todos.
   * @type {[Todo[], Function]}
   */
  const [todos, setTodosState] = useState(() => getTodos());

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  // PUBLIC_INTERFACE
  function addTodo(title, subtitle) {
    const todo = {
      title,
      subtitle,
      completed: false,
      id: Date.now()
    };
    setTodosState([todo, ...todos]);
  }
  // PUBLIC_INTERFACE
  function markDone(id) {
    setTodosState(
      todos.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  }
  // PUBLIC_INTERFACE
  function deleteTodo(id) {
    setTodosState(todos.filter((t) => t.id !== id));
  }

  // PUBLIC_INTERFACE
  function clearTodos() {
    setTodosState([]);
    setTodos([]);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        markDone,
        deleteTodo,
        clearTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useTodos() {
  return useContext(TodoContext);
}
