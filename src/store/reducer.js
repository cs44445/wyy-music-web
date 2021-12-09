// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'//使用redux-immutable中的combineReducers优化性能
import { reducer as recommendReducer } from '../pages/Discover/children/Recommend/store'

const reducer = combineReducers({
  recommend: recommendReducer
})

export default reducer