import './App.css';
import Table from './components/Table';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    // <div className="App">
      <Provider store={store}>
      <Table/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* </div> */}
    </Provider>
  );
}

export default App;
