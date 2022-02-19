import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/DesktopMenu.scss';

const DesktopMenu = ({ onMouseEnter, onMouseLeave }) => {
	return (
		<div
			className="desktop-menu"
			onMouseEnter={() => onMouseEnter(true)}
			onMouseLeave={() => onMouseLeave(false)}
		>
			<ul>
				<li>
					<Link to="/my-orders" className="title">
						My orders
					</Link>
				</li>
				<li>
					<Link to="/my-account">My account</Link>
				</li>
				<li>
					<Link to="/sign-up">Sign out</Link>
				</li>
			</ul>
		</div>
	);
};

export default DesktopMenu;
