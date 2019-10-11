import { combineReducers } from 'redux'
import reducer from './reducer'
import ImgReducer from './ImgReducer'
import randomReducer from './randomReducer'
import score from './score'

export default combineReducers({
  reducer,
  ImgReducer,
  randomReducer,
  score

})