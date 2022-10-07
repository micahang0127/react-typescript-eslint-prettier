import React from 'react';
import logo from './logo.svg';
import './App';

// function App() {
const App: React.FC = () => {
  // React.FC 타입으로 지졍 -> 장단점이 있음
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editttttsssssttt <code>src/App.tsx</code> and save to reload.
        </p>
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
};

export default App;
