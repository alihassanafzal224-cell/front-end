import { useState } from "react";
import ToDoList from "../pages/ToDoList";
import AuthPage from "../pages/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthPage value={{ count, setCount, increment, decrement }} />
          }
        />

        <Route
          path="/todolist"
          element={
            <ToDoList value={{ count, setCount, increment, decrement }} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
