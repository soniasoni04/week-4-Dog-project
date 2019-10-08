const Iamges = (state = [], action = {}) => {
    switch (action.type) {
    case 'SET_BREED_IMAGES': 
      return [...state, ...action.payload] // add payload aarray to existing state
    default:
      return state
    }
  }
  export default Iamges