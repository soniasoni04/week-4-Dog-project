import request from 'superagent'

export default function GetRandomOneImage(){
    return function(dispatch){
        request('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            dispatch({
                type: 'GET_RANDON_ONE_IMAGE',
                payload: response.body.message
            })
        })
    }
 }


