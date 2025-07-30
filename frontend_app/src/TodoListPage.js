import React from "react";
import { useTodos } from "./TodoContext";
import "./todo_app.css";

// PUBLIC_INTERFACE
function TodoListPage({ onNavigate }) {
  const { todos, markDone, deleteTodo } = useTodos();

  const uncompleted = todos.filter((t) => !t.completed);

  return (
    <div className="todo-app-frame" style={{ position: "relative" }}>
      <div className="status-bar" />
      <div className="appbar">
        <span className="appbar-title">TODO APP</span>
      </div>
      <main className="todos-section" id="todoList">
        {uncompleted.length === 0 ? (
          <div
            style={{
              color: "var(--color-bg-tertiary)",
              fontSize: 16,
              textAlign: "center",
              margin: "48px 0",
            }}
          >
            No todos yet. Add one!
          </div>
        ) : (
          uncompleted.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <div className="todo-titles">
                <div className="todo-title">{todo.title}</div>
                {todo.subtitle && <div className="todo-subtitle">{todo.subtitle}</div>}
              </div>
              <div className="todo-actions">
                <button
                  className="todo-action-btn"
                  title="Mark Done"
                  aria-label="Mark Done"
                  onClick={() => markDone(todo.id)}
                >
                  <svg viewBox="0 0 25 25" fill="none">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="var(--color-bg-tertiary)" />
                    <path d="M7 13l4 4 7-7" stroke="var(--color-ffffff)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className="todo-action-btn"
                  title="Delete"
                  aria-label="Delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg viewBox="0 0 25 25" fill="none">
                    <rect x="4" y="7" width="17" height="14" rx="3" fill="var(--color-bg-secondary)" />
                    <path d="M8 16l9-9M8 7l9 9" stroke="var(--color-grey-dark)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </main>
      <button className="add-todo-button" id="openAddTodo" aria-label="Add new task" onClick={() => onNavigate("add")}>
        <svg viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="var(--color-bg-tertiary)" />
          <path d="M8 16h16M16 8v16" stroke="var(--color-ffffff)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <nav className="navbar">
        <button className="navbar-button selected" id="navAll" onClick={() => onNavigate("home")}>
          All
        </button>
        <button className="navbar-button" id="navCompleted" onClick={() => onNavigate("completed")}>
          Completed
        </button>
      </nav>
    </div>
  );
}

export default TodoListPage;
