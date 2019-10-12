const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'GET_RANDON_IMAGE':
      return {...state, image : action.payload, answer: action.payload.split('/')[4] }
    default:
      return state
  }
}

export default reducer