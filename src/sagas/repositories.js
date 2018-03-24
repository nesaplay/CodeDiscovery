import { takeEvery, call, put } from 'redux-saga/effects'
import { fetch } from '../services/fetch'
import { 
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_SUCCESS, 
    FETCH_REPOSITORIES_ERROR
} from '../actions/types'

function* workerFetchRepositories({ payload }) {
    const options = {
        url: 'repositories',
        params: { q: payload }
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
