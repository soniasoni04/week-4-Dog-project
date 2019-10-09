import React from 'react';
import './App.css';
import DogsListContainer from './components/DogListContainer';
import DogBreedImages from './components/DogBreedImages'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />
        <DogBreedImagesContainer />
      </header>
    </div>
  );
}

export default App;
