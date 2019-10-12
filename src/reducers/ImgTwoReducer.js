const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case 'GET_RANDON_TWO_IMAGE':
        return [...action.payload] 
      default:
        return state
    }
  }
  
  export default reducer