const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'SET_BREED_IMAGES':
      return [...action.payload] // replace entire state
    default:
      return state
    }
  }
  export default reducer