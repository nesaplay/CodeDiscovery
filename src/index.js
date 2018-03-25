import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import rootSaga from './sagas/index'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
const store = createStoreWithMiddleware(reducers)

sagaMiddleware.run(rootSaga)

render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
registerServiceWorker();