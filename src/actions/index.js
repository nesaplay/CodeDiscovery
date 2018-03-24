import { 
    SEARCH_UPDATE, 
    FETCH_REPOSITORIES 
} from './types'

// Action creators
export const updateSearchQuery = query => ({ type: SEARCH_UPDATE, payload: query })
export const fetchRepositories = query => ({ type: FETCH_REPOSITORIES, payload: query })