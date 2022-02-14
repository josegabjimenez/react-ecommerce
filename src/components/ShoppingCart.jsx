import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '@context/AppContext';
import { ShoppingCartItem } from '@components/index/';
//Styling
import { gsap } from 'gsap';
import '@styles/ShoppingCart.scss';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const ShoppingCart = ({ isOpen, onClick }) => {
	const {
		state: { cart, totalPrice },
		removeFromCart,
	} = useContext(AppContext); // Here I get the global state through the App Context

	// It trigger an animation either when is open or closed
	useEffect(() => {
		if (isOpen) {
			gsap.to('.ShoppingCart-product-detail', {
				duration: 0,
				css: { display: 'block' },
			});
			gsap.to('.ShoppingCart-product-detail', {
				duration: 0.6,
				xPercent: -100,
				ease: 'power3.inOut',
			});
		} else {
			gsap.to('.ShoppingCart-product-detail', {
				duration: 0.6,
				xPercent: 0,
				ease: 'power3.inOut',
			});
			gsap.to('.ShoppingCart-product-detail', {
				duration: 0.8,
				css: { display: 'none' },
			});
		}
	}, [isOpen]);

	return (
		<aside className="ShoppingCart-product-detail">
			<div className="ShoppingCart-title-container ">
				<BsArrowLeftCircleFill alt="arrow" onClick={onClick} />
				<p className="ShoppingCart-title">Shopping Cart</p>
			</div>
			<div className="ShoppingCart-content">
				{cart.map((item) => (
					<ShoppingCartItem
						key={`orderItem-${item.id}`}
						item={item}
						removeFromCart={removeFromCart}
					/>
				))}
				<div className="ShoppingCart-order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice}</p>
				</div>
				<button className="ShoppingCart-primary-button">Checkout</button>
			</div>
		</aside>
	);
};

export default ShoppingCart;
