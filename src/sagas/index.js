import { all } from 'redux-saga/effects'

import logger from './logger'
import search from './search'
import repositories from './repositories'
import contributors from './contributors'

export default function* rootSaga() {
	yield all([
        logger(),
        search(),
        repositories(),
        contributors()
	])
}
