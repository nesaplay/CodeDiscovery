import React from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RepositoryCard = ({
	full_name,
	description,
	language,
	html_url,
	stargazers_count,
	open_issues_count,
	contributors_url,
}) => {
	const { Content, Header, Meta, Description } = Card

	return (
		<Card fluid color='orange'>
			<Content>
				<Link to={`/repos/${full_name}/contributors`}>
					<Label color="orange" ribbon="right">
						Top Contributors
					</Label>
				</Link>
				<Header>
					<a href={html_url} target="_blank">
						{full_name}
					</a>
				</Header>
				<Meta>{language}</Meta>
				<Description>{description}</Description>
			</Content>
			<Content extra>
				<Icon name="star" /> {stargazers_count}
				<Icon name="warning sign" /> {open_issues_count}
			</Content>
		</Card>
	)
}

export default RepositoryCard
