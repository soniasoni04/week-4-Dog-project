
import request from 'superagent'

export default function getRandomImage(){
    return function(dispatch){
        request('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            // console.log(response.body.message)
            dispatch({
                type: 'GET_RANDON_IMAGE',
                payload: response.body.message
            })
        })
    }
 }


