import React from 'react';
import { Header, Card, DesktopMenu, MobileMenu } from '@components';
import { Product } from '@pages';

const Home = () => {
	return (
		<div>
			<Header />
			{/* <MobileMenu /> */}
			<h1>E-commerce shop home</h1>
			<div className="cards-container">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
