import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Card } from 'semantic-ui-react'

import * as actions from '../actions'
import Search from '../components/Search'
import RepositoryCard from '../components/RepositoryCard'

class Home extends Component {
	onSearchChange = query => (
		this.props.updateSearchQuery(query)
	)

	onSearchClick = () => (
		this.props.fetchRepositories()
	)

	componentWillUnmount() {
		this.props.resetRepositoriesPage()
	}

	render() {
		const { Row, Column } = Grid
		const { isLoading } = this.props.repositories

		return (
			<Container>
				<Grid>
					<Row columns={1}>
						<Column>
							<Search
								searchHandler={this.onSearchChange}
								clickHandler={this.onSearchClick}
								isLoading={isLoading}
							/>
						</Column>
					</Row>
					<Row>
						<Column>
							<Card.Group itemsPerRow={2}>
								{this._displayRepositories()}
							</Card.Group>
						</Column>
					</Row>
				</Grid>
			</Container>
		)
	}

	_displayRepositories() {
		const { items } = this.props.repositories.data
		const { Column } = Grid

		return (
			items && items.map(repo => (
				<RepositoryCard 
					{...repo} 
					key={repo.id} 
				/>
			))
		)
	}
}

const mapStateToProps = ({ repositories, search }) => ({ repositories, search })

export default connect(mapStateToProps, actions)(Home)
