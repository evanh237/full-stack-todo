const URL = "http://localhost:5000";

export const addNewTodo = async (description) => {
  try {
    const response = await fetch(`${URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllTodos = async () => {
  try {
    const response = await fetch(`${URL}/todos`);
    if (!response.ok) {
      throw new Error("network response /GET todos failed!");
    }
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("there was an error /GET all todos", error);
  }
};

export const deleteTodo = async (todo_id) => {
  try {
    const response = await fetch(`${URL}/todos/${todo_id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("network /DELETE error");
    }
  } catch (error) {
    console.error("there was an error /DELETE", error);
  }
};

export const updateTodo = async (todo_id, description) => {
  try {
    const response = await fetch(`${URL}/todos/${todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error with /PUT request");
  }
};
