import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => {
	const { Row, Column } = Grid

	return (
		<header>
			<Grid>
				<Row>
					<Column>
						<Link to="/">
							<Header as="h3" icon textAlign="center">
								<Icon name="users" circular />
								<Header.Content>Code Discovery</Header.Content>
							</Header>
						</Link>
					</Column>
				</Row>
			</Grid>
		</header>
	)
}
