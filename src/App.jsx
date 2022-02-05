import React from 'react';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
	render() {
		const { name } = this.props;
		return (
			<>
				<h1 className="text-red-600 font-bold border">Hello {name}</h1>
			</>
		);
	}
}

export default hot(App);
