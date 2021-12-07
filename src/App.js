import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setstate] = useState({});
  useEffect(() => {
    fetch('/.netlify/functions/hellowordfunction')
      .then((res) => res.json())
      .then((json) => setstate(json));
  }, []);
  return (
    <div className="App">
      {state?.data && <div>{JSON.stringify(state, null, 2)}</div>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
