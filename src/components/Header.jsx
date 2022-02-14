import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import { DesktopMenu, ShoppingCart } from '@components/index';
// Styles and icons
import '@styles/Header.scss';
import { menu, shoppingCart } from '@assets/icons';
import { logoYardSale } from '@assets/logos';

const Header = () => {
	const {
		state: { cart },
	} = useContext(AppContext);
	const [toggleDesktopMenu, setToggleDesktopMenu] = useState(false);
	const [toggleShoppingCart, setToggleShoppingCart] = useState(false);

	const handleToggleDesktopMenu = (state) => {
		setToggleDesktopMenu(state);
	};

	const handleToggleShoppingCart = (state) => {
		setToggleShoppingCart(state);
	};

	// Verify if the cart has items or not items and depend of it, it will display a number or not
	const verifyCart = (numberOfItems) => {
		if (numberOfItems > 0) {
			if (numberOfItems > 9) return <div>+9</div>;
			return <div>{numberOfItems}</div>;
		}
		return null;
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
						<img
							src={shoppingCart}
							alt="shopping cart"
							onClick={() => handleToggleShoppingCart(true)}
						/>
						{verifyCart(cart.length)}
					</li>
				</ul>
			</div>
			{toggleDesktopMenu && (
				<DesktopMenu
					onMouseEnter={handleToggleDesktopMenu}
					onMouseLeave={handleToggleDesktopMenu}
				/>
			)}
			<ShoppingCart
				isOpen={toggleShoppingCart}
				onClick={() => handleToggleShoppingCart(false)}
			/>
		</nav>
	);
};

export default Header;
