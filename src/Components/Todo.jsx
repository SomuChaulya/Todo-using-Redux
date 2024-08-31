import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm.jsx";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice.js"; // Import the named export

function Todo() {
  const todos = useSelector((state) => state.todos.todos); // Access the correct level of the state
  console.log(todos);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteTodo(id)); // Dispatch the delete action with the provided id
  };

  const TaskDone = (id) => {
    dispatch(markAsDone(id)); // Dispatch the action to mark the task as done
  };

  return (
    <>
      <AddForm />
      <h2>Todos List:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Apply a line-through style if the task is done */}
            <span
              style={{ textDecoration: todo.isdone ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>DELETE</button>{" "}
            <button onClick={() => TaskDone(todo.id)}>Task Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
