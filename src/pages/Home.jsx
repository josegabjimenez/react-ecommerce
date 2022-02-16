import React from 'react';
import { ProductList } from '@containers/index';
import '@styles/Pages.scss';

const Home = () => {
	return (
		<section className="Home">
			<div className="Home-content">
				<h1>E-commerce shop home</h1>
				<ProductList />
			</div>
		</section>
	);
};

export default Home;
