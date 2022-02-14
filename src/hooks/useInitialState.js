import { useState, useEffect } from 'react';

const initialState = {
	cart: [],
	totalPrice: 0,
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	// It calculates the total price of the products in the cart using a reduce method
	const calculeTotalPrice = () => {
		const reducer = (accumulator, currentValue) => {
			return accumulator + currentValue.price;
		};
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	// Add a product to the cart
	const addToCart = (payload) => {
		if (!state.cart.includes(payload)) {
			setState({ ...state, cart: [...state.cart, payload] });
		}
	};

	// Remove a product from the cart
	const removeFromCart = (index) => {
		const newCart = state.cart;
		newCart.splice(index, 1);
		setState({ ...state, cart: [...newCart] });
	};

	// It changes the total price each time the cart changes
	useEffect(() => {
		const totalPrice = calculeTotalPrice();
		setState({ ...state, totalPrice });
	}, [state.cart]);

	return { state, addToCart, removeFromCart };
};

export default useInitialState;
