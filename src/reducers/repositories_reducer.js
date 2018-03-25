import {
	FETCH_REPOSITORIES,
	FETCH_REPOSITORIES_SUCCESS,
	FETCH_REPOSITORIES_ERROR,
    RESET_REPOSITORIES
} from '../actions/types'

const initState = {
	data: [],
	isLoading: false,
	isLoaded: false,
	error: null
}

export default function(state = initState, action) {
	switch (action.type) {
		case FETCH_REPOSITORIES:
			return {
				...state,
                isLoading: true,
                isLoaded: false,
				error: null
			}
		case FETCH_REPOSITORIES_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
				isLoaded: true
			}
		case FETCH_REPOSITORIES_ERROR:
			return {
				...state,
				isLoading: false,
				isLoaded: false,
				error: action.error.message
			}
		case RESET_REPOSITORIES:
			return initState
		default:
			return state
	}
}
