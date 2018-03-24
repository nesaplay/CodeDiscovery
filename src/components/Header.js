import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default () => {
	return (
		<header>
			<Header as="h3" icon textAlign="center">
				<Icon name="users" circular />
				<Header.Content>Code Discovery</Header.Content>
			</Header>
		</header>
	)
}
