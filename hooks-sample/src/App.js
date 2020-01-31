import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useData } from './hooks';

const {data, setData} = useData

function Test() {
  const [counter, setCounter] = useState(0)

  // Este es el hook. Component did mount, unmoutn and will unmount
  useEffect(() => {
    console.log("Hello", data)
    return () => {
      console.log("unmount")
    } // Se ejecuta en el will unmount
  }, [counter]); // Cada que cambia este estado. Arrreglo vacio para que se solo se ejecute cuando inicia

return <div>Test {counter}
<button type="button" onClick={()=> setCounter(counter+1)}>Add</button></div>
}

function App() {
  const [show, setShow]= useState(true);
  return (
    <div className="App">
      <header className="App-header">
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
        <button type="button" onClick={() => setShow(!show)}>Toggle</button>
        <button type="button" onClick={() => setShow(!show)}>Toggle</button>

        {show && <Test />} {/*Hace unmount cuando no lo muestra*/}
      </header>
    </div>
  );
}

export default App;
