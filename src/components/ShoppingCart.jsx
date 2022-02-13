import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '@context/AppContext';
//Styling
import { gsap } from 'gsap';
import '@styles/ShoppingCart.scss';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ShoppingCart = ({ isOpen, onClick }) => {
	const { state, removeFromCart } = useContext(AppContext);

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
				{state.cart.map((item, index) => (
					<div className="ShoppingCart-shopping-cart">
						<figure>
							<img src={item.images[0]} alt="bike" />
						</figure>
						<p>{item.title}</p>
						<p>${item.price}</p>
						<AiOutlineCloseCircle
							alt="close"
							onClick={() => removeFromCart(index)}
						/>
					</div>
				))}
				<div className="ShoppingCart-order">
					<p>
						<span>Total</span>
					</p>
					<p>$550</p>
				</div>
				<button className="ShoppingCart-primary-button">Checkout</button>
			</div>
		</aside>
	);
};

export default ShoppingCart;
