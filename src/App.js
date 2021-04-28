import { useState } from 'react';
import './App.css';
// import Count from "./Count";

function App() {
  const [showCounter, hideCounter] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <br/>
        {/* <Count /> */}
        <button onClick={()=>hideCounter(!showCounter)}>{showCounter? "Show Counter" : "Hide Counter"}</button>
        <br/>
        {/* {showCounter && <Count />} */}
      </header>
    </div>
  );
}

export default App;
