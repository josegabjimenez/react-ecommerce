import React, { useState, useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import { gsap } from 'gsap';
//Styles
import '@styles/ProductDetail.scss';
import { addToCartImage, addedToCartImage, Close } from '@assets/icons';

const ProductDetail = () => {
	const item = {
		title: 'Bike',
		price: '35,00',
		description:
			'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
		images: [
			'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		],
	};
	const [isOnCart, setIsOnCart] = useState(false); // To know if the current product is on the cart or not

	const {
		state: {
			cart,
			currentProduct: { isOpen, product },
		},
		closeProduct,
		addToCart,
	} = useContext(AppContext);

	// It trigger an animation either when is open or closed
	useEffect(() => {
		if (isOpen) {
			gsap.to('.ProductDetail-product-detail', {
				duration: 0.6,
				xPercent: -100,
				ease: 'power3.inOut',
			});
		} else {
			gsap.to('.ProductDetail-product-detail', {
				duration: 0.6,
				xPercent: 0,
				ease: 'power3.inOut',
			});
		}
	}, [isOpen]);

	useEffect(() => {
		if (cart.includes(product)) {
			setIsOnCart(true);
		} else {
			setIsOnCart(false);
		}
	}, [product, cart]);

	if (Object.keys(product).length != 0) {
		item.title = product.title;
		item.price = product.price;
		item.description = product.description;
		item.images = product.images;
	}

	return (
		<aside className="ProductDetail-product-detail">
			<div
				className="ProductDetail-product-detail-close"
				onClick={() => closeProduct()}
			>
				{/* <img src={close} alt="close" /> */}
				<Close />
			</div>
			<img src={item.images[0]} alt="bike" />
			<div className="ProductDetail-product-info-detail">
				<p>${item.price}</p>
				<p>{item.title}</p>
				<p>{item.description} </p>
				<button
					className={`ProductDetail-primary-button ProductDetail-add-to-cart-button ${
						isOnCart && 'added-cart-button'
					}`}
					onClick={() => addToCart(product)}
				>
					<img
						src={isOnCart ? addedToCartImage : addToCartImage}
						alt="add to cart"
					/>
					Add{isOnCart && 'ed'} to cart
				</button>
			</div>
		</aside>
	);
};

export default ProductDetail;
