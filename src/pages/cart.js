import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItemCard from '../components/CartItemCard';

export const Cart = () => {
	const cartItemss = useSelector((store) => store.cart.items);
	const cartItems = [...new Set(cartItemss)];
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className='cart'>
			{cartItems.length !== 0 ? (
				<div className='cart-top'>
					{' '}
					<h4 className='cartCount'>🛒 - {cartItems.length}</h4>
					<button onClick={handleClearCart}>🧹</button>
				</div>
			) : (
				''
			)}
			<div className='cartItems'>
				{cartItems.map((items) => (
					<CartItemCard key={items.id} {...items} />
				))}
			</div>
			{cartItems.length !== 0 ? (
				<>
					<h3>Total Price- &#8377;{cartItems.reduce((acc, curr) => acc + (curr.price || curr.defaultPrice), 0) / 100}</h3>
				</>
			) : (
				<h2>Oops!! Your cart is empty☹️</h2>
			)}
		</div>
	);
};
