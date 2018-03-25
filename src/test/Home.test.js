import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from '../containers/Home'
import reducers from '../reducers/index'

const store = createStore(reducers)

it('renders a container with injected store', () => {
	const wrapper = shallow(
        <Provider store={store}>
            <Home />
        </Provider>
    )

	expect(wrapper).toMatchSnapshot()
})
