import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

//console.log(store.getState())
//store.subscribe(() => console.log('updated state', store.getState()))

export default store