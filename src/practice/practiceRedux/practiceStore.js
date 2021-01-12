import { createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const practiceStore = createStore(reducer, composeWithDevTools())

export default practiceStore