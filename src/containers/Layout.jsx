import React from 'react';
import { Footer, Header } from '@components/index';
import '@styles/Layout.scss';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
