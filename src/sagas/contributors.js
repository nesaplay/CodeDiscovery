import { takeEvery, call, put, select } from 'redux-saga/effects'
import { fetch } from '../services/fetch'
import {
	FETCH_CONTRIBUTORS,
	FETCH_CONTRIBUTORS_SUCCESS,
	FETCH_CONTRIBUTORS_ERROR,
	CONTRIBUTORS_PAGE_UP,
	FETCH_CONTRIBUTORS_END
} from '../actions/types'

function* workerFetchContributors({ payload }) {
	const { page } = yield select(state => state.contributors)
	const isFirstPage = page === 1

	const options = {
		url: payload,
		params: {
			page: isFirstPage ? page : page + 1,
			per_page: isFirstPage ? '10' : '5'
		}
	}

	yield put({ type: CONTRIBUTORS_PAGE_UP })

	try {
		const { data } = yield call(fetch, options)

		if (data.length === 0) {
			yield put({ type: FETCH_CONTRIBUTORS_END })
		} else {
			yield put({ type: FETCH_CONTRIBUTORS_SUCCESS, payload: data })
		}
	} catch (error) {
		yield put({ type: FETCH_CONTRIBUTORS_ERROR, error })
	}
}

export default function* watcherFetchContributors() {
	yield takeEvery(FETCH_CONTRIBUTORS, workerFetchContributors)
}
