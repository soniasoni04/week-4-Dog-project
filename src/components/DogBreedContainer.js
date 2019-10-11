import React from 'react'
import { connect } from 'react-redux'
import DogBreed from './DogBreed'



class DogBreedContainer extends React.Component {


render() {

       return(
       <div>
           <h1>Hello Dog Lovers...</h1>
           <DogBreed breeds={this.props.breeds}/>
       </div>)
   }
}




const mapStateToProps = (state) => {
    console.log('state', state);
    
   return {
      breeds: state.reducer

   }
}
export default connect(mapStateToProps)(DogBreedContainer)