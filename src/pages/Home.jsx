import React from 'react';
import { Header, Footer } from '@components/index';
import { ProductList } from '@containers/index';
import '@styles/Pages.scss';

const Home = () => {
	return (
		<section className="Home">
			<div className="Home-content">
				<Header />
				{/* <MobileMenu /> */}
				<h1>E-commerce shop home</h1>
				<ProductList />
			</div>
			<Footer />
		</section>
	);
};

export default Home;
