import React,{Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'
import {SetBreedImages} from '../actions/FetchAction'
import DogBreedImages from './DogBreedImages'



class DogBreedImagesContainer extends Component {
    
  
    componentDidMount() {
        //console.log('this.props.match.params.breed',this.props);
        
      const breed = this.props.match.params.breed // this work only with Route:  "/dog-breeds/:breed"
      request
        .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
        .then(response => {
            const breedImages = (response.body.message.slice(1,11))
            this.props.dispatch(SetBreedImages(breedImages))
        })
        .catch(console.error)
    }
  
    render() {
        //console.log('images : ',this.props.breedImages )
        return(
        <div>
            <h1>Find the dog images...</h1>
            <DogBreedImages images={this.props.breedImages} />
        </div>)
    }
 }



 const mapStateToProps = (state) => {
    return {
       breedImages: state.ImgReducer
    }
 }
 export default connect(mapStateToProps)(DogBreedImagesContainer)