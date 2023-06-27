import { useState, useEffect } from 'react';
import { swiggy_api_URL } from '../config';

export const useRestaurant = () => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		swiggyRestaurants();
	}, []);
	async function swiggyRestaurants() {
		const data = await fetch(swiggy_api_URL);
		const json = await data.json();

		setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}
	console.log(restaurants);
	return restaurants;
};
