import React from 'react'
import RepositoryCard from '../components/RepositoryCard'

it('renders a component', () => {
	const wrapper = shallow(
        <RepositoryCard />
    )

	expect(wrapper).toMatchSnapshot()
})
