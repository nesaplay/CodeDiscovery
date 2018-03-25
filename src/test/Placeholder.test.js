import React from 'react'
import Placeholder from '../components/Placeholder'

it('renders a component', () => {
	const wrapper = shallow(
        <Placeholder />
    )

	expect(wrapper).toMatchSnapshot()
})
