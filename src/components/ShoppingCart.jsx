import React from 'react';
import '@styles/ShoppingCart.scss';

const ShoppingCart = () => {
	return (
		<aside className="ShoppingCart-product-detail">
			<div className="ShoppingCart-title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="ShoppingCart-title">Shopping Cart</p>
			</div>
			<div className="ShoppingCart-content">
				<div className="ShoppingCart-shopping-cart">
					<figure>
						<img
							src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="bike"
						/>
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src="./icons/icon_close.png" alt="close" />
				</div>
				<div className="ShoppingCart-shopping-cart">
					<figure>
						<img
							src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="bike"
						/>
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src="./icons/icon_close.png" alt="close" />
				</div>
				<div className="ShoppingCart-shopping-cart">
					<figure>
						<img
							src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="bike"
						/>
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src="./icons/icon_close.png" alt="close" />
				</div>
				<div className="ShoppingCart-order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="ShoppingCart-primary-button">Checkout</button>
			</div>
		</aside>
	);
};

export default ShoppingCart;
