import request from 'superagent'
import {SetRandomBreed} from './actions/FetchAction'
import {RandomImage} from './actions/FetchAction'


const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'GET_RANDOM_IMAGE': {
      this.props.dispatch(RandomImage())

      GET_RANDOM_IMAGE =()=>{
        request
        .get('https://dog.ceo/api/breeds/image/random')
           .then(response => {
              const randomImageURL = response.body.message
              console.log(response.body.message)
              console.log('randomImage : ',randomImageURL) 

              let breedWithImage = randomImageURL.slice(30)
              console.log('breed :', breedWithImage )

              let posOfImage = breedWithImage.indexOf("/");
              console.log('pos : ', posOfImage)

              let breed = breedWithImage.slice(0,posOfImage)
              console.log('breed :', breed)
              console.log('action',SetRandomBreed(randomImageURL, breed))
              console.log('dispatch?',this.props.dispatch)



              this.props.dispatch(SetRandomBreed(randomImageURL,breed ))
           })    
           .catch(console.error)
}


    }
        
    




      return [...action.payload] // replace entire state
    default:
      return state
    }
  }
  export default reducer