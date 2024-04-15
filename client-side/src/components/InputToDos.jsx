import { useState } from "react";
import { addNewTodo } from "../api";
import "./InputToDos.css";

const InputToDo = ({ setTodos }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert("please add a description!");
      return;
    }
    const newTodo = await addNewTodo(description);
    setTodos((prevTodo) => [...prevTodo, newTodo]);
    setDescription("");
  };

  return (
    <div className="input-todo-container">
      <h2>Add to List</h2>

      <form className="input-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ height: "32px", marginRight: "10px", marginBottom: "10px" }}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputToDo;
