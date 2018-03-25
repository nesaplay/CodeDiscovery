import {
	FETCH_CONTRIBUTORS,
	FETCH_CONTRIBUTORS_SUCCESS,
    FETCH_CONTRIBUTORS_ERROR
} from '../actions/types'

const initState = {
    data: [],
	isLoading: false,
	isLoaded: false,
	error: null
}

export default function(state = initState, action) {
	switch (action.type) {
		case FETCH_CONTRIBUTORS:
			return {
				...state,
                isLoading: true,
                isLoaded: false,
				error: null
			}
		case FETCH_CONTRIBUTORS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
				isLoaded: true
			}
		case FETCH_CONTRIBUTORS_ERROR:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				error: action.error
			}
		default:
			return state
	}
}
