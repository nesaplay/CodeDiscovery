import { 
    SEARCH_UPDATE, 
    SEARCH_SUBMIT, 
    SEARCH_RESET 
} from '../actions/types'

const initState = {
    query: ''
}

export default function(state = initState, action) {
	switch (action.type) {
		case SEARCH_SUBMIT:
			return {
				...state,
				query: action.payload
			}
		case SEARCH_RESET:
			return initState
		default:
			return state
	}
}
