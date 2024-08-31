import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddForm() {
  const [task, setTask] = useState(""); // Initialize state to handle form input

  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(task);
    if (task.trim()) {
      // Check if the task is not empty before dispatching
      dispatch(addTodo(task)); // Dispatch the action to add a new todo
      setTask(""); // Clear the input field by resetting the state
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={task} // Bind input value to the state
          onChange={(e) => setTask(e.target.value)} // Update state on input change
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddForm;
