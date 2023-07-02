import { useParams } from 'react-router-dom'; // import useParams for read `resId`
import { swiggy_menu_api_URL, IMG_CDN_URL, ITEM_IMG_CDN_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from '../config';
import { MenuShimmer } from './Shimmer';
import { useResMenu } from '../utils/useResMenu';
import { useState } from 'react';
// redux imports
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const RestaurantMenu = () => {
	const { id } = useParams(); // call useParams and get value of restaurant id using object destructuring
	const [restaurant, menuItems] = useResMenu(swiggy_menu_api_URL, id, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY);
	const [searchtext, setSearchtext] = useState('');

	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	// dispatching an addItem action
	const handleAdd = (item) => {
		dispatch(addItem(item));
	};

	const handleRemove = (item) => {
		dispatch(removeItem(item.id));
	};

	return !restaurant ? (
		<MenuShimmer />
	) : (
		<div className='restaurant-menu'>
			<div className='restaurant-summary'>
				<img className='restaurant-img' src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
				<div className='restaurant-summary-details'>
					<div>
						<h2 className='restaurant-title'>{restaurant?.name}</h2>{' '}
						<p className='restaurant-tags'>{restaurant?.cuisines?.join(', ')}</p>
					</div>

					<div className='restaurant-details'>
						<span>⭐{restaurant?.avgRating}</span>

						<div className='restaurant-rating-slash'>|</div>
						<div>{restaurant?.sla?.slaString}</div>
						<div className='restaurant-rating-slash'>|</div>
						<div>{restaurant?.costForTwoMessage}</div>
					</div>
				</div>
			</div>

			<div className='restaurant-menu-content'>
				<div className='menu-items-container'>
					<div className='menu-title-wrap'>
						<div className='searchBar' style={{ justifyContent: 'space-between' }}>
							<h3 className='menu-title'>Food Menu🍲 </h3>
							<input type='text' placeholder='search food' value={searchtext} onChange={(e) => setSearchtext(e.target.value)} />
						</div>
						<p className='menu-count'>{menuItems.length} ITEMS</p>
					</div>
					<div className='menu-items-list'>
						{menuItems
							.filter((item) => {
								return searchtext.toLowerCase() === '' ? item : item?.name.toLowerCase().includes(searchtext);
							})
							.map((item) => (
								<div className='menu-item' key={item?.id}>
									<div className='menu-item-details'>
										<h3 className='item-title'>{item?.name}</h3>
										<p className='item-cost'>
											{item?.price > 0
												? new Intl.NumberFormat('en-IN', {
														style: 'currency',
														currency: 'INR',
												  }).format(item?.price / 100)
												: ' '}
										</p>
										<p className='item-desc'>{item?.description}</p>
									</div>
									<div className='menu-img-wrapper'>
										{item?.imageId && (
											<img className='menu-item-img' src={ITEM_IMG_CDN_URL + item?.imageId} alt={item?.name} />
										)}
										{cartItems.some((cartItem) => cartItem.id === item.id) ? ( // Check if the current item's id exists in cartItems
											<div className='quantity-container'>
												<button className='minus-btn' onClick={() => handleRemove(item)}>
													-
												</button>

												<button className='plus-btn' onClick={() => handleAdd(item)}>
													+
												</button>
											</div>
										) : (
											<button className='add-btn' onClick={() => handleAdd(item)}>
												ADD +
											</button>
										)}
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;
