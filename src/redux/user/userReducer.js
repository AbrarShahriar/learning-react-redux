import { fetch_user_request, fetch_user_success, fetch_user_failure} from './userTypes'

const initialState = {
	loading: false,
	users: [],
	error: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case fetch_user_request:
			return {
				...state,
				loading: true
			}	

		case fetch_user_success:
			return {
				loading: false,
				users: action.payload,
				error: ''
			}	

		case fetch_user_request:
			return {
				loading: false,
				users: [],
				error: action.payload
			}	

		default:
			return state
	}
}

export default userReducer