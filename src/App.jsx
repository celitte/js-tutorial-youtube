import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] =useState(2);

  useEffect(() => {
    // window.alert("Hello World");
    console.log('Hello count:', count);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <button onClick={()=>setCount(count+1)} type="button">Count</button>
          <div>
            count: {count}
          </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
