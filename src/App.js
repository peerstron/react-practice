import React, { useState } from 'react';
import './App.css';
import Counter from './Counter'
import Todos from "./Todos";
function App() {
  const [showCounter, hideCounter] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World... :)</h1>
        <br/>
        {/* <Counter /> */}
        <button onClick={()=>hideCounter(!showCounter)}>{!showCounter? "Show Counter" : "Hide Counter"}</button>
        <br/>
        <Counter showCounter={showCounter}/>
        <Todos />
      </header>
    </div>
  );
}

export default App;
