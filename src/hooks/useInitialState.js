import { useState, useEffect } from 'react';

const initialState = {
	cart: [],
	totalPrice: 0,
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	// Add a product to the cart and update its total price
	const addToCart = (payload) => {
		if (!state.cart.includes(payload)) {
			setState({
				...state,
				cart: [...state.cart, payload],
				totalPrice: state.totalPrice + payload.price,
			});
		}
	};

	// Remove a product from the cart and update its total price
	const removeFromCart = (payload) => {
		const newCart = state.cart.filter((product) => product.id != payload.id);
		setState({
			...state,
			cart: [...newCart],
			totalPrice: state.totalPrice - payload.price,
		});
	};

	return { state, addToCart, removeFromCart };
};

export default useInitialState;
