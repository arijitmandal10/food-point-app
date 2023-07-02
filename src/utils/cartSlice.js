import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		clearCart: (state) => {
			state.items = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.items = state.items.filter((item) => item.id !== itemId);
		},
	},
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
