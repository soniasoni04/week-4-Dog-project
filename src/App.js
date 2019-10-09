import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DogBreedContainer from './components/DogBreedContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

function App() {
 return (
   <div className="App">
   <Route exact path="/" component={DogBreedContainer} />
   <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
  </div>
 );
}
export default App;