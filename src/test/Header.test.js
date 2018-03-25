import React from 'react'
import Header from '../components/Header'

it('renders a component', () => {
	const wrapper = shallow(
        <Header />
    )

	expect(wrapper).toMatchSnapshot()
})
