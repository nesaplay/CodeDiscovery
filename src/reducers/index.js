import { combineReducers } from 'redux'

import search from './search_reducer'
import repositories from './repositories_reducer'
import contributors from './contributors_reducer'

const rootReducer = combineReducers({
    search,
    repositories,
    contributors
})

export default rootReducer
