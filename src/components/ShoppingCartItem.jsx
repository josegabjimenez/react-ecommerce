import React from 'react';
import { Close } from '@assets/icons/index';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ShoppingCartItem = ({ item, removeFromCart }) => {
	const { title, price, images } = item;
	return (
		<div className="ShoppingCart-shopping-cart">
			<figure>
				<img src={images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<Close alt="close" onClick={() => removeFromCart(item)} />
		</div>
	);
};

export default ShoppingCartItem;
