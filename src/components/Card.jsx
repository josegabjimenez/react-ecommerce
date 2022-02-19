import React, { useEffect, useRef, useContext } from 'react';
import AppContext from '@context/AppContext';
import { gsap } from 'gsap';
import '@styles/Card.scss';
import { addToCartImage, addedToCartImage } from '@assets/icons';

const Card = ({ product }) => {
	const { title, price, images } = product;
	const {
		state: { cart, currentProduct },
		addToCart,
		openProduct,
	} = useContext(AppContext);

	const handleClick = () => {
		addToCart(product);
	};

	// Animations
	const cardRef = useRef();

	const onEnter = (element) => {
		gsap.to(element, {
			scale: 1.05,
			opacity: 0.9,
			borderRadius: 15,
			duration: 0.5,
			ease: 'back',
		});
	};

	const onLeave = (element) => {
		gsap.to(element, {
			scale: 1,
			opacity: 1,
			borderRadius: 20,
			duration: 0.5,
			ease: 'back',
		});
	};

	useEffect(() => {
		gsap.from(cardRef.current, {
			opacity: 0,
			y: 50,
			duration: 0.5,
			stagger: 0.2,
			scale: 0.95,
			ease: 'back',
		});
	}, []);

	return (
		<div ref={cardRef} className="Card-product">
			<img
				className="Card-product-img"
				src={images[0]}
				alt="Product image"
				onMouseEnter={(el) => onEnter(el.target)}
				onMouseLeave={(el) => onLeave(el.target)}
				onClick={() => openProduct(product)}
			/>
			<div className="Card-product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure>
					<img
						src={cart.includes(product) ? addedToCartImage : addToCartImage}
						alt="Add product to cart button"
						onMouseEnter={(el) => onEnter(el.target)}
						onMouseLeave={(el) => onLeave(el.target)}
						onClick={() => handleClick()}
					/>
				</figure>
			</div>
		</div>
	);
};

export default Card;
