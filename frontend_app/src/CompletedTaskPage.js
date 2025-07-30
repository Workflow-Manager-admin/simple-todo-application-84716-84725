import React from "react";
import { useTodos } from "./TodoContext";
import "./todo_app.css";

// PUBLIC_INTERFACE
function CompletedTaskPage({ onNavigate }) {
  const { todos, deleteTodo } = useTodos();

  const completed = todos.filter((t) => t.completed);

  return (
    <div className="todo-app-frame">
      <div className="status-bar" />
      <div className="appbar">
        <button
          className="todo-action-btn"
          aria-label="Back"
          onClick={() => onNavigate("home")}
        >
          <svg viewBox="0 0 26 26" fill="none" style={{ width: 26, height: 26 }}>
            <path
              d="M18 13H8M12 17l-5-4 5-4"
              stroke="var(--color-ffffff)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="appbar-title">Completed Task</span>
      </div>
      <main className="todos-section">
        {completed.length === 0 ? (
          <div
            style={{
              color: "var(--color-bg-tertiary)",
              fontSize: 16,
              textAlign: "center",
              margin: "48px 0",
            }}
          >
            No completed tasks yet.
          </div>
        ) : (
          completed.map((todo) => (
            <div className="todo-item completed" key={todo.id}>
              <div className="todo-titles">
                <div className="todo-title">{todo.title}</div>
                {todo.subtitle && <div className="todo-subtitle">{todo.subtitle}</div>}
              </div>
              <div className="todo-actions">
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
    </div>
  );
}

export default CompletedTaskPage;
