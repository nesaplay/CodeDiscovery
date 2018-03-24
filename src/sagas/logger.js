import { takeEvery, select } from 'redux-saga/effects'

function* workerLogger(action) {
	const state = yield select()

	console.info('action', action)
	console.info('state after', state)
}

export default function* watcherLogger() {
	yield takeEvery('*', workerLogger)
}
