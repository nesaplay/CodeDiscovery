import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Search from '../components/Search'

export default class Home extends Component {
	onSearchChange = (query) => {
		console.log(query)
	}

	render() {
		return (
			<Container>
				<Search searchHandler={this.onSearchChange} />
			</Container>
		)
	}
}
