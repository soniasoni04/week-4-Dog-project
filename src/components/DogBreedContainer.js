import React from 'react'
import { connect } from 'react-redux'
import DogBreed from './DogBreed'
import DogBreedImages from './DogBreedImages'
import { request } from 'http'

class DogBreedContainer extends React.Component {
   componentDidMount() {
       fetch('https://dog.ceo/api/breeds/list/all')
           .then(response => response.json())
           .then(data => {
               const action = {
                   type: 'SET_BREED',
                   payload: Object.keys(data.message)
               }
               this.props.dispatch(action)
           })


           




        }
   render() {
       return(
       <div>
           <h1>Hello Dog Lovers...</h1>
           <DogBreed breeds={this.props.breeds}/>
           
       </div>)
   }
}
const mapStateToProps = (state) => {
   return {
      breeds: state
   }
}
export default connect(mapStateToProps)(DogBreedContainer)