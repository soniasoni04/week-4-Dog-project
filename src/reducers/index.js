import { combineReducers } from 'redux'
import reducer from './reducer'
import ImgReducer from './ImgReducer'
import randomReducer from './randomReducer'
import ImgTwoReducer from './ImgTwoReducer'
import ImgOneReducer from './ImgOneReducer'

export default combineReducers({
  reducer,
  ImgReducer,
  randomReducer,
  ImgTwoReducer,
  ImgOneReducer
})