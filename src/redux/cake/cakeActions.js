import { buy_cake } from './cakeTypes'

export const buyCake = (number = 1) => {
	return {
		type: buy_cake,
		//payload is the addition data we want to send
		payload: number
	}
}