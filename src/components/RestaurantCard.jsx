import { ITEM_IMG_CDN_URL } from '../config';

export function RestaurantCard({ name, cuisines, cloudinaryImageId, avgRating, minDeliveryTime, costForTwoString }) {
	return (
		<div className='restaurantCard'>
			<img src={ITEM_IMG_CDN_URL + cloudinaryImageId} alt='RestaurantIMG' />
			<div>
				<h3 style={{ marginTop: '0px' }}>{name}</h3>
				<h6 style={{ margin: '0px' }}>{cuisines.join(' ,')}</h6>
			</div>
			<div className='card-bottom'>
				{' '}
				<h5>⭐{avgRating}</h5> <h6>|</h6>
				<h6>
					{minDeliveryTime}mins &nbsp; | &nbsp; {costForTwoString}
				</h6>
			</div>
		</div>
	);
}
