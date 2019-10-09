import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DogBreedContainer from './components/DogBreedContainer';
import DogBreedImages from './components/DogBreedImages'

function App() {
 return (
   <div className="App">
   <Route exact path="/" component={DogBreedContainer} />
   <Route path="/dog-breeds/:breed" component={DogBreedImages} />
  </div>
 );
}
export default App;