import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SEARCH_UPDATE, SEARCH_SUBMIT } from '../actions/types'

function* workerSearchRepositories({ payload }) {
	yield call(delay, 100) // 500ms delay and we could switch to instant search
	yield put({ type: SEARCH_SUBMIT, payload })
}

export default function* watcherSearchRepositories() {
	yield takeLatest(SEARCH_UPDATE, workerSearchRepositories)
}
