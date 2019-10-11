import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DogBreedContainer from './components/DogBreedContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import homePage from './homePage'
import request from 'superagent'
import {SetBreedList} from '../src/actions/FetchAction' 
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount(){
              {
                request
                .get('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    const breeds = Object.keys(response.body.message)
                    this.props.dispatch(SetBreedList(breeds))
                }
                    
                    )
                .catch(console.error)
              }
  }
  render(){
    return (
      <React.Fragment>
      <div className="App">
          <Route path="/" exact component={homePage} />
          <Route path="/game1" component={game1} />
          <Route path="/game2" component={game2} />
          <Route path="/game3" component={game3} />
          <Route path="/dog-list" component={DogBreedContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
      </React.Fragment>
      
    );   
}
 
}
const mapStateToProps = (state) =>{
//list of breeds
return {
  breeds: state.reducer

}

}
export default connect(mapStateToProps)(App);