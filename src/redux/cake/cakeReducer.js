import { buy_cake } from './cakeTypes'

const initialState = {
	numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case buy_cake:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload
			}
		
		default:
			return state
	}
}

export default cakeReducer