import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'

export default () => {
	const { Row, Column } = Grid

	return (
		<header>
			<Grid>
				<Row>
					<Column>
						<Header as="h3" icon textAlign="center">
							<Icon name="users" circular />
							<Header.Content>Code Discovery</Header.Content>
						</Header>
					</Column>
				</Row>
			</Grid>
		</header>
	)
}
