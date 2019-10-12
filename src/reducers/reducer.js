const reducer = (state = [], action = {}) => {
  switch (action.type) {
  case 'SET_BREED':
    return [...action.payload] // replace entire state
  // case 'ADD_BREEDS': 
  //   return [...state, ...action.payload] // add payload aarray to existing state
  default:
    return state
  }
}
export default reducer