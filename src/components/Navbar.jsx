import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../images/logo.jpg';

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [buttonColor, setButtonColor] = useState('#aeff9f');

	const handleToggle = () => {
		setIsLoggedIn(!isLoggedIn);
		setButtonColor(isLoggedIn ? '#aeff9f' : '#ff3b3b');
	};

	const cartItems = useSelector((store) => store.cart.items);
	return (
		<nav>
			<Link to='/'>
				<img src={logo} alt='logo' />
			</Link>

			<ul>
				<li>
					{' '}
					<Link to='/'>Home</Link>
				</li>
				<li>
					{' '}
					<Link to='/about'>About</Link>
				</li>
				<li>
					{' '}
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					{' '}
					<Link to='/cart'>Cart-{cartItems.length}</Link>
				</li>
				<li>
					<button onClick={handleToggle} style={{ backgroundColor: buttonColor }}>
						{isLoggedIn ? 'Logout' : 'Login'}
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
