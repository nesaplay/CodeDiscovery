import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const Page404 = () => {
	return (
		<Container>
			<div>
				<h1>Psst! You shouldn't be here!</h1>
				<p>
					Go back <Link to="/">HOME</Link> and search for more
					repositories.
				</p>
			</div>
		</Container>
	)
}

export default Page404
