import { takeEvery, call, put, select } from 'redux-saga/effects'
import { fetch } from '../services/fetch'
import { 
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_SUCCESS, 
    FETCH_REPOSITORIES_ERROR
} from '../actions/types'

function* workerFetchRepositories() {
    const query = yield select(({ search }) => search.query)

    const options = {
        url: 'search/repositories',
        params: { 
            q: query,
            per_page: '6' 
        }
    }

	try {
		const { data } = yield call(fetch, options)
		yield put({ type: FETCH_REPOSITORIES_SUCCESS, payload: data })
	} catch (error) {
		yield put({ type: FETCH_REPOSITORIES_ERROR, error })
	}
}

export default function* watcherFetchRepositories() {
	yield takeEvery(FETCH_REPOSITORIES, workerFetchRepositories)
}
