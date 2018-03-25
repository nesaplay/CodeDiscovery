import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Card, Button } from 'semantic-ui-react'

import * as actions from '../actions'
import ContributorCard from '../components/ContributorCard'

class Contributors extends Component {
	onLoadMoreClick = () => {
		this._fetchContributors()
	}

	componentDidMount() {
		this._fetchContributors()
	}

	render() {
		const { Row, Column } = Grid
		const { isLoading } = this.props.contributors

		return (
			<Container text>
				<Grid>
					<Row>
						<Column>
							<Card.Group itemsPerRow={1}>
								{this._displayContributors()}
							</Card.Group>
						</Column>
					</Row>
					<Row>
						<Column textAlign="center">
							<Button primary color="blue" loading={isLoading} onClick={this.onLoadMoreClick}>
								Load More...
							</Button>
						</Column>
					</Row>
				</Grid>
			</Container>
		)
	}

	_displayContributors() {
		const { data } = this.props.contributors
		const { Column } = Grid

		return (
			data &&
			data.map(contributor => (
				<ContributorCard {...contributor} key={contributor.id} />
			))
		)
	}

	_fetchContributors() {
		const { location, fetchContributors } = this.props

		fetchContributors(location.pathname)
	}
}

const mapStateToProps = ({ contributors }) => ({ contributors })

export default connect(mapStateToProps, actions)(Contributors)
