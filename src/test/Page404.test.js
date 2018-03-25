import React from 'react'
import Page404 from '../components/Page404'

it('renders a component', () => {
	const wrapper = shallow(
        <Page404 />
    )

	expect(wrapper).toMatchSnapshot()
})
