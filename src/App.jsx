import Todo from "./Components/Todo.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
