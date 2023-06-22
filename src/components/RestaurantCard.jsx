import { ITEM_IMG_CDN_URL } from '../config';

export function RestaurantCard({ name, cuisines, cloudinaryImageId, avgRating }) {
	return (
		<div className='restaurantCard'>
			<img src={ITEM_IMG_CDN_URL + cloudinaryImageId} alt='RestaurantIMG' />
			<div>
				<h3>{name}</h3>
				<h6>{cuisines.join(' ,')}</h6>
			</div>

			<h5>{avgRating} stars</h5>
		</div>
	);
}
