import { push, punch, kick } from './actions'

const initialState = {
	situation: 'peaceful'
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case push:
			return {
				...state,
				situation: 'little tensed'
			}
		case punch:
			return {
				...state,
				situation: 'quite tensed'
			}
		case kick:
			return {
				...state,
				situation: 'very tensed'
			}
		
		default:
			return state
	}
}

export default reducer


