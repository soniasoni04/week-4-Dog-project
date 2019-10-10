import { combineReducers } from 'redux'
import reducer from './reducer'
import ImgReducer from './ImgReducer'
import randomReducer from './randomReducer'

export default combineReducers({
  reducer,
  ImgReducer,
  randomReducer
})