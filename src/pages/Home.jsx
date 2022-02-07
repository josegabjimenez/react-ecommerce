import React from 'react';
import { Header, Card } from '@components';

const Home = () => {
	return (
		<div>
			<Header />
			<h1>E-commerce shop home</h1>
			<div className="cards-container">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /> <Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
