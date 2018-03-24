import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./containers/Home'))
const AsyncContributors = asyncComponent(() => import('./containers/Contributors'))
const AsyncPage404 = asyncComponent(() => import('./components/Page404'))

export default () => (
	<Switch>
		<Route path="/" exact component={AsyncHome} />
		<Route path="/:name" exact component={AsyncContributors} />
		<Route component={AsyncPage404} />
	</Switch>
)
