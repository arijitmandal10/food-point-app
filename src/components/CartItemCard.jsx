import { ITEM_IMG_CDN_URL } from '../config';

const CartItemCard = ({ imageId, name, description }) => {
	return (
		<div className='itemCardContainer'>
			<div>
				<img style={{ width: '83px', height: '88px' }} src={ITEM_IMG_CDN_URL + imageId} alt='' />
			</div>

			<p>{description}</p>

			<div className='itemDetails'>
				<h6>{name}</h6>
				<div className='itemBtn' style={{ textAlign: 'center' }}>
					<button className='minus-btn'>-</button> &nbsp;
					<button className='plus-btn'>+</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;
