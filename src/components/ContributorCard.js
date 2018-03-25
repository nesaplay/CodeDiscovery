import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ContributorCard = ({
	avatar_url,
	contributions,
	login,
	type,
	html_url
}) => {
	const { Content, Header, Meta, Description } = Card

	return (
		<Card fluid color="orange">
			<Content>
				<Image
					floated="right"
					src={avatar_url}
					size="tiny"
					style={{ position: 'absolute', right: '20px' }}
				/>
				<Header>{login}</Header>
				<Meta>{type}</Meta>
				<Description>{contributions} contributions</Description>
			</Content>
			<Content extra>
				<div className="ui buttons fluid">
					<a href={html_url} target="_blank" style={{ width: '100%'}}>
						<Button fluid basic color="orange">
							More from this user
						</Button>
					</a>
				</div>
			</Content>
		</Card>
	)
}

export default ContributorCard
