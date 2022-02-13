import React, { useEffect, useState } from 'react';
import { DesktopMenu } from '@components/index';
// Styles and icons
import '@styles/Header.scss';
import { menu, shoppingCart } from '@assets/icons';
import { logoYardSale } from '@assets/logos';

const Header = () => {
	const [toggleDesktopMenu, setToggleDesktopMenu] = useState(false);

	const handleToggleDesktopMenu = (state) => {
		setToggleDesktopMenu(state);
	};

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logoYardSale} alt="logo" className="logoHeader" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li
						className="navbar-email"
						onMouseEnter={() => handleToggleDesktopMenu(true)}
						onMouseLeave={() => handleToggleDesktopMenu(false)}
					>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggleDesktopMenu && (
				<DesktopMenu
					onMouseEnter={handleToggleDesktopMenu}
					onMouseLeave={handleToggleDesktopMenu}
				/>
			)}
		</nav>
	);
};

export default Header;
