import {
	FETCH_CONTRIBUTORS,
	FETCH_CONTRIBUTORS_SUCCESS,
    FETCH_CONTRIBUTORS_ERROR,
    CONTRIBUTORS_PAGE_UP,
    RESET_CONTRIBUTORS,
    FETCH_CONTRIBUTORS_END
} from '../actions/types'

const initState = {
	data: [],
	page: 1,
	isLoading: false,
	hasMore: true,
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
				hasMore: true,
				error: null
			}
		case FETCH_CONTRIBUTORS_SUCCESS:
			return {
				...state,
				data: [...state.data, ...action.payload],
				isLoading: false,
				isLoaded: true
			}
		case FETCH_CONTRIBUTORS_ERROR:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				error: action.error.message
			}
		case FETCH_CONTRIBUTORS_END:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				hasMore: false
			}
		case CONTRIBUTORS_PAGE_UP:
			return {
				...state,
				page: state.page + 1
			}
		case RESET_CONTRIBUTORS:
			return initState
		default:
			return state
	}
}
