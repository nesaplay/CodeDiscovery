import React from 'react'
import Search from '../components/Search'

it('renders a component', () => {
	const wrapper = shallow(
        <Search />
    )

	expect(wrapper).toMatchSnapshot()
})
