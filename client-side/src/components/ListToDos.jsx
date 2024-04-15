import { useEffect, useState } from "react";
import { getAllTodos, deleteTodo, updateTodo } from "../api";
import "./ListToDos.css";

const ListToDos = ({ todos, setTodos }) => {
  const [editId, setEditId] = useState(null);
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const fetchedTodos = await getAllTodos();
      setTodos(fetchedTodos);
    };
    getTodos();
  }, []);

  const handleEdit = (id, description) => {
    setEditId(id);
    setNewDescription(description);
  };

  const handleSave = async (id) => {
    await updateTodo(id, newDescription);
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.todo_id === id ? { ...todo, description: newDescription } : todo
      )
    );
    setEditId(null);
    setNewDescription("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.todo_id !== id);
    });
  };

  return (
    <div className="list-todos-container">
      {todos.length === 0 ? (
        <h3>You're All Caught Up!</h3>
      ) : (
        <table className="list-todos-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo.todo_id}>
                <td>
                  {editId === todo.todo_id ? (
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  ) : (
                    todo.description
                  )}
                </td>
                <td>
                  {editId === todo.todo_id ? (
                    <button
                      className="edit-save-btn"
                      onClick={() => handleSave(todo.todo_id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="edit-save-btn"
                      onClick={() => handleEdit(todo.todo_id, todo.description)}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListToDos;
