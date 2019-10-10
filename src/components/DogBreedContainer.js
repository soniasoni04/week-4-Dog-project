import React from 'react'
import { connect } from 'react-redux'
import DogBreed from './DogBreed'



class DogBreedContainer extends React.Component {
//    componentDidMount() {
//        request
//        .get('https://dog.ceo/api/breeds/list/all')
//         .then(response => {
//             const breeds = Object.keys(response.body.message)
//             this.props.dispatch(SetBreedList(breeds))
//         }
            
//             )
//         .catch(console.error)
//  }
   


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