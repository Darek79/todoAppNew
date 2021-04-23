import "./styles/Desktop.scss";
import "./styles/Tablet.scss";
import "./styles/Mobile.scss";
import "./styles/Reset.scss";
import TodoMain from "./components/TodoMain/TodoMain";
import {Provider} from "react-redux";
import {store} from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TodoMain />
      </div>
    </Provider>
  );
}

export default App;
