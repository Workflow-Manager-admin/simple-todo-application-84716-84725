import React, { useRef } from "react";
import { useTodos } from "./TodoContext";
import "./todo_app.css";

// PUBLIC_INTERFACE
function AddTodoPage({ onNavigate }) {
  const { addTodo } = useTodos();
  const refTitle = useRef();
  const refDetail = useRef();

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    const title = refTitle.current.value.trim();
    const subtitle = refDetail.current.value.trim();
    if (!title) return;
    addTodo(title, subtitle);
    onNavigate("home");
  }

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
        <span className="appbar-title">Add Task</span>
      </div>
      <form
        style={{ margin: "48px 0 0 0", display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit}
      >
        <div style={{ width: "93%" }}>
          <label
            style={{
              fontSize: 16,
              color: "var(--color-grey-dark)",
              fontFamily: "var(--font-jost)",
              marginBottom: 6,
            }}
          >
            Title
          </label>
          <input type="text" className="todo-input" ref={refTitle} placeholder="Enter task title" maxLength={50} required />
        </div>
        <div style={{ width: "93%" }}>
          <label
            style={{
              fontSize: 16,
              color: "var(--color-grey-dark)",
              fontFamily: "var(--font-jost)",
              marginBottom: 6,
            }}
          >
            Detail
          </label>
          <input type="text" className="todo-input" ref={refDetail} placeholder="Enter task details" maxLength={120} />
        </div>
        <button className="button-solid" type="submit" style={{ marginTop: 30 }}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;
