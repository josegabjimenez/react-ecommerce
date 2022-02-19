import { useState, useEffect } from 'react';

const initialState = {
	cart: [],
	totalPrice: 0,
	currentProduct: {
		isOpen: false,
		product: {},
	},
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	// Add a product to the cart and update its total price
	const addToCart = (payload) => {
		if (state.cart.includes(payload)) {
			removeFromCart(payload);
		} else {
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

	const openProduct = (product) => {
		setState({ ...state, currentProduct: { isOpen: true, product } });
	};

	const closeProduct = () => {
		setState({
			...state,
			currentProduct: { ...state.currentProduct, isOpen: false },
		});
	};

	return { state, addToCart, removeFromCart, openProduct, closeProduct };
};

export default useInitialState;
