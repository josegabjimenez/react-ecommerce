import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import {
	ProductDetail,
	RecoveryPasswordEmail,
	NewPassword,
	Layout,
} from './containers';
import {
	Home,
	Login,
	SignUp,
	MyAccount,
	MyOrder,
	MyOrders,
	NotFound,
} from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product" component={ProductDetail} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/sign-up" component={SignUp} />
					<Route exact path="/my-account" component={MyAccount} />
					<Route exact path="/my-order" component={MyOrder} />
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
