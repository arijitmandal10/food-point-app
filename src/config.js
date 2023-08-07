
// menu items api card type key
export const MENU_ITEM_TYPE_KEY = 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
export const RESTAURANT_TYPE_KEY = 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant';

export const ITEM_IMG_CDN_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/';

// Image CDN URL for Restaurant card
export const IMG_CDN_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

// shimmer card unit
export const shimmer_card_unit = 8;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
	'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035280822533668&lng=77.55963755857057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
	'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=';
