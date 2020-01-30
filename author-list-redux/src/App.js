import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Search from './pages/Search/container';
import ListTable from './pages/ListTable/container';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="container">
      <h1 className="title">Lista de Autores</h1>
      <Provider store={store}>
          <Search />
          <ListTable/>
      </Provider>
    </div>
  );
}

export default App;
