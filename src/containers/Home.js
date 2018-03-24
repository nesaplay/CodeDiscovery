import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import * as actions from '../actions'
import Search from '../components/Search'

class Home extends Component {

	onSearchChange = (query) => {
		this.props.updateSearchQuery(query)
	}

	onSearchClick = () => {
		const { search, fetchRepositories } = this.props

		fetchRepositories(search.query)
	}

	render() {
		return (
			<Container>
				<Search searchHandler={this.onSearchChange}
					clickHandler={this.onSearchClick}
				/>
			</Container>
		)
	}
}

const mapStateToProps = ({ repositories, search }) => ({ repositories, search })

export default connect(mapStateToProps, actions)(Home)
