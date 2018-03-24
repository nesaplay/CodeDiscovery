import { combineReducers } from 'redux'
import search from './search_reducer'
import repositories from './repositories_reducer'

const rootReducer = combineReducers({
    search,
    repositories
})

export default rootReducer
