import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../pages/Discover/children/Recommend/store'

const reducer = combineReducers({
  recommend: recommendReducer
})

export default reducer