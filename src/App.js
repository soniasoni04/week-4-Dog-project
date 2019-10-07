import React from 'react';
import './App.css';
import DogsList from './components/DogListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello : Dog List </h1>
        <DogsList />
      </header>
    </div>
  );
}

export default App;
