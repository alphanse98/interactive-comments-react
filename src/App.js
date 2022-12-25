import "./App.scss";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
