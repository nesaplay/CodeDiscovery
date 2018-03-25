import { takeEvery, call, put, select } from 'redux-saga/effects'
import { fetch } from '../services/fetch'
import { 
    FETCH_CONTRIBUTORS,
    FETCH_CONTRIBUTORS_SUCCESS,
    FETCH_CONTRIBUTORS_ERROR,
    CONTRIBUTORS_PAGE_UP
} from '../actions/types'

function* workerFetchContributors({ payload }) {
    yield put({ type: CONTRIBUTORS_PAGE_UP })

    const { page } = yield select(state => state.contributors)

    const options = {
        url: payload,
        params: { 
            page: page,
            per_page: '10' 
        }
    }

	try {
		const { data } = yield call(fetch, options)
		yield put({ type: FETCH_CONTRIBUTORS_SUCCESS, payload: data })
	} catch (error) {
		yield put({ type: FETCH_CONTRIBUTORS_ERROR, error })
	}
}

export default function* watcherFetchContributors() {
	yield takeEvery(FETCH_CONTRIBUTORS, workerFetchContributors)
}
