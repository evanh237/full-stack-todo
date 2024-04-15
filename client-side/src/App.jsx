import "./App.css";
import { useState, useEffect } from "react";
import InputToDo from "./components/InputToDos";
import ListToDos from "./components/ListToDos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>To Do List</h1>
      <div className="container">
        <InputToDo setTodos={setTodos} />
        <ListToDos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
