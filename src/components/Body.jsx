import { RestaurantCard } from './RestaurantCard';
// import { RestaurantList } from '../config';
import { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';
import { NoRestaurants } from './NoRestaurants';
import { Link } from 'react-router-dom';

const Body = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [searchtext, setSearchtext] = useState('');

	useEffect(() => {
		swiggyRestaurants();
	}, []);
	async function swiggyRestaurants() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035280822533668&lng=77.55963755857057&page_type=DESKTOP_WEB_LISTING',
		);
		const json = await data.json();

		setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}
	console.log(restaurants);

	// function filterData(searchtext, restaurants) {
	// 	return restaurants.filter((restaurant) => restaurant.data.name.includes(searchtext));
	// }

	return restaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className='searchBar'>
				<input type='text' placeholder='search restaurants/food' value={searchtext} onChange={(e) => setSearchtext(e.target.value)} />
			</div>
			<hr />
			<div className='restaurants'>
				{restaurants
					.filter((restaurant) => {
						return searchtext.toLowerCase() === '' ? restaurant : restaurant.data?.name.toLowerCase().includes(searchtext);
					})
					.map((restaurant, index) => (
						<Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}>
							<RestaurantCard {...restaurant.data} key={index} />
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
