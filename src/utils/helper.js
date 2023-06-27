export const filterData = (searchtext, restaurants) => {
	return restaurants.filter((restaurant) => restaurant.data.name.includes(searchtext));
};
