import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useBlockHeight from './hooks/useBlockHeight';
import BlockHeight from './components/BlockHeight';

function App() {

  const { blockHeight, fetchBlockHeight } = useBlockHeight("http://localhost:20443");

  useEffect(() => {
    fetchBlockHeight()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BlockHeight value={blockHeight}/>
      </header>
    </div>
  );
}

export default App;
