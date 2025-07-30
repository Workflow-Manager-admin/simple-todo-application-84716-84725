import React, { useState } from "react";
import { TodoProvider } from "./TodoContext";
import TodoListPage from "./TodoListPage";
import AddTodoPage from "./AddTodoPage";
import CompletedTaskPage from "./CompletedTaskPage";
import "./todo_app.css";
import "./todo_design_tokens.css";

/*
  PUBLIC_INTERFACE
  App entry point switches between main todo, add, and completed routes.
*/
function App() {
  // "home" | "add" | "completed"
  const [route, setRoute] = useState("home");

  function onNavigate(next) {
    if (next === "home" || next === "all") setRoute("home");
    else if (next === "add") setRoute("add");
    else if (next === "completed") setRoute("completed");
    else setRoute("home");
  }

  return (
    <TodoProvider>
      {route === "home" && <TodoListPage onNavigate={onNavigate} />}
      {route === "add" && <AddTodoPage onNavigate={onNavigate} />}
      {route === "completed" && <CompletedTaskPage onNavigate={onNavigate} />}
    </TodoProvider>
  );
}

export default App;
