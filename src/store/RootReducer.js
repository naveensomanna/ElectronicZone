import { combineReducers } from 'redux'
import HomeReducer from '../components/HomeReducer'
const RootReducer = () => {
  return combineReducers({ products: HomeReducer })
}
export default RootReducer
