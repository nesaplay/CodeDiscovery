import { 
    SEARCH_UPDATE, 
    FETCH_REPOSITORIES, 
    FETCH_CONTRIBUTORS,
    RESET_CONTRIBUTORS,
    RESET_REPOSITORIES,
    SEARCH_RESET
} from './types'

// Search action creators
export const updateSearchQuery = query => ({ type: SEARCH_UPDATE, payload: query })
export const resetSearchQuery = () => ({ type: SEARCH_RESET })

// Repositories action creators
export const fetchRepositories = () => ({ type: FETCH_REPOSITORIES })
export const resetRepositoriesPage = () => ({ type: RESET_REPOSITORIES })

// Contributors action creators
export const fetchContributors = url => ({ type: FETCH_CONTRIBUTORS, payload: url })
export const resetContributorsPage = () => ({ type: RESET_CONTRIBUTORS })