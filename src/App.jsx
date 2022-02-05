import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Login, Layout } from './containers';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Login} />
			</Switch>
		</BrowserRouter>
		// <Layout>
		// 	<Login />
		// </Layout>
	);
};

export default hot(App);
