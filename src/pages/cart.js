import { useSelector } from 'react-redux';
import CartItemCard from '../components/CartItemCard';

export const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<div className='cart'>
			<h4 className='cartCount'>🛒 - {cartItems.length}</h4>
			<div className='cartItems'>
				{cartItems.map((items) => (
					<CartItemCard key={items.id} {...items} />
				))}
			</div>
			{cartItems.length !== 0 ? (
				<h3>Total Price- &#8377;{cartItems.reduce((acc, curr) => acc + (curr.price || curr.defaultPrice), 0) / 100}</h3>
			) : (
				<h2>OOps!! Your cart is empty☹️</h2>
			)}
		</div>
	);
};
