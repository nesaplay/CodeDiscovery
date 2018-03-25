import React, { Component } from 'react'

import Header from './components/Header'
import Routes from './Routes'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Routes />
			</div>
		)
	}
}
