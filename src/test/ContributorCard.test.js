import React from 'react'
import ContributorCard from '../components/ContributorCard'

it('renders a component', () => {
	const wrapper = shallow(
        <ContributorCard />
    )

	expect(wrapper).toMatchSnapshot()
})
