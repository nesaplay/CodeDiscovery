import { 
    SEARCH_UPDATE, 
    FETCH_REPOSITORIES, 
    FETCH_CONTRIBUTORS,
} from './types'

// Action creators
export const updateSearchQuery = query => ({ type: SEARCH_UPDATE, payload: query })

export const fetchRepositories = () => ({ type: FETCH_REPOSITORIES })
export const fetchContributors = () => ({ type: FETCH_CONTRIBUTORS })