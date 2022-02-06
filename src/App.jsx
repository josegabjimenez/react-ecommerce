import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { RecoveryPasswordEmail, NewPassword, Layout } from './containers';
import { Home, NotFound } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
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
