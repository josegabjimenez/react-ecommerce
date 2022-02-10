import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '@styles/Card.scss';
import { addToCart } from '@assets/icons';

const Card = () => {
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
				src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="Product image"
				onMouseEnter={(el) => onEnter(el.target)}
				onMouseLeave={(el) => onLeave(el.target)}
			/>
			<div className="Card-product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img
						src={addToCart}
						alt="Add product to cart button"
						onMouseEnter={(el) => onEnter(el.target)}
						onMouseLeave={(el) => onLeave(el.target)}
					/>
				</figure>
			</div>
		</div>
	);
};

export default Card;
