
import request from 'superagent'

export default function getRandomTwoImage(){
    return function(dispatch){
        request('https://dog.ceo/api/breeds/image/random/2')
        .then(response => {
            // console.log(response.body.message)
            dispatch({
                type: 'GET_RANDON_TWO_IMAGE',
                payload: response.body.message
            })
        })
    }
 }


