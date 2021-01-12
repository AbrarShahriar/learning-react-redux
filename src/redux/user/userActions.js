import { fetch_user_request, fetch_user_success, fetch_user_failure} from './userTypes'
import axios from 'axios'

export const fetchUserRequest = () => {
	return {
		type: fetch_user_request
	}
}
export const fetchUserSuccess = users => {
	return {
		type: fetch_user_success,
		payload: users
	}
}
export const fetchUserFailure = error => {
	return {
		type: fetch_user_failure,
		payload: error
	}
}

export const fetchUsers = () => {
	return dispatch => {
		dispatch(fetchUserRequest)
		axios.get('http://jsonplaceholder.typicode.com/users')
			.then(res => {
				const users = res.data
				dispatch(fetchUserSuccess(users))
			})
			.catch(err => {
				const errMsg = err.message
				dispatch(fetchUserFailure(errMsg))
			})
	}
}