import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import {
	RecoveryPasswordEmail,
	NewPassword,
	MyOrders,
	MyAccount,
	MyAccountInfo,
	Login,
	Layout,
} from './containers';
import { Home, NotFound } from './pages';
import Test from './Test';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/my-account" component={MyAccount} />
					<Route exact path="/my-account-info" component={MyAccountInfo} />
					<Route exact path="/my-orders" component={MyOrders} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route
						exact
						path="/password-recovery-email"
						component={RecoveryPasswordEmail}
					/>
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default hot(App);
// export default App;
