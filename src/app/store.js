import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: {
    // Assign a key to your reducer, typically named after the slice
    todos: todoReducer, // This key will be used to access state.todos in your components
  },
});
