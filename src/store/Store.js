import { createStore, compose } from 'redux'
import RootReducer from './RootReducer'
export function configureStore () {
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(RootReducer(), composeEnhancers())
    return store
  } else {
    const store = createStore(RootReducer())
    return store
  }
}
