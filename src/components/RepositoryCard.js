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
				<span className='ui left floated'>
					<Icon name="star" /> {stargazers_count}
				</span>
				<span className='ui right floated'>
					<Icon name="warning sign" /> {open_issues_count}
				</span>
			</Content>
		</Card>
	)
}

export default RepositoryCard
