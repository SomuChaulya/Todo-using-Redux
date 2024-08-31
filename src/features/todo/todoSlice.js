import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state containing a sample todo item
const initialState = {
  todos: [{ id: 1, task: "task demo", isdone: false }],
};

// Creating a slice for todos with necessary reducers
export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    // Adding a new todo item
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // Generate a unique id for the new todo
        task: action.payload,
        isdone: false,
      };
      state.todos.push(newTodo); // Add the new todo to the list
    },

    // Deleting a todo item based on id
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Marking a specific todo item as done
    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isdone = true; // Set the isdone status to true
      }
    },
  },
});

// Exporting the action creators for use in components
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

// Exporting the reducer to be included in the store
export default todoSlice.reducer;
