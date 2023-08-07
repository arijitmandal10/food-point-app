import { RestaurantCard } from './RestaurantCard';
import { useState } from 'react';
import { Shimmer } from './Shimmer';
import { NoRestaurants } from './NoRestaurants';
import { Link } from 'react-router-dom';
import { useOnline } from '../utils/useOnline';
import { useRestaurant } from '../utils/useRestaurant';

const Body = () => {
	const [searchtext, setSearchtext] = useState('');
	const isOnline = useOnline();
	const restaurants = useRestaurant();

	if (!isOnline) {
		return <h1 style={{ textAlign: 'center' }}>sorry!! please check your internet connection</h1>;
	}

	return restaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className='searchBar'>
				<input type='text' placeholder='search restaurants' value={searchtext} onChange={(e) => setSearchtext(e.target.value)} />
			</div>
			<hr />
			<div className='restaurants'>
				{restaurants
					.filter((restaurant) => {
						return searchtext.toLowerCase() === '' ? restaurant : restaurant.info?.name.toLowerCase().includes(searchtext);
					})
					.map((restaurant, index) => (
						<Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
							<RestaurantCard {...restaurant.info} key={index} />
						</Link>
					))}
				{/* In summary, this code filters the "restaurants" array based on the search text.
				 It includes only the restaurants whose names include the search text (if it is not empty). 
				 Then, it maps over the filtered array and renders a <RestaurantCard /> component 
				 for each restaurant that matches the filter criteria. */}

				{searchtext && restaurants.every((restaurant) => !restaurant?.data?.name.toLowerCase().includes(searchtext)) && <NoRestaurants />}

				{/* In the above code, the restaurants.every() function checks if none of the restaurant names include the search text. 
				If the search text is not empty and this condition is true, the <NoRestaurants> will be rendered within the div. */}
			</div>
		</>
	);
};

export default Body;
