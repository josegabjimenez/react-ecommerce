import { useState } from 'react';

const initialState = {
	cart: [],
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		if (!state.cart.includes(payload)) {
			setState({ ...state, cart: [...state.cart, payload] });
		}
	};

	const removeFromCart = (index) => {
		const newCart = state.cart;
		newCart.splice(index, 1);
		setState({ ...state, cart: newCart });
	};

	return { state, addToCart, removeFromCart };
};

export default useInitialState;
