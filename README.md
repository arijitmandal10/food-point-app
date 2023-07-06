I apologize for the oversight. Here's an updated README.md file that includes the libraries, technologies, and hooks used in the Food Point React project:


# Food Point

Food Point is a React-based web application that allows users to explore and order food from various restaurants. This project provides a user-friendly interface to browse restaurants, view their menus, and add items to the cart for ordering.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A library for declarative routing in React applications.
- Redux Toolkit: A library for state management in React applications.
- react-redux: Official React bindings for Redux, used to connect React components with the Redux store.
- CSS: Cascading Style Sheets for styling the application.

## Hooks Used

- useState: A React hook used for managing local component state.
- useEffect: A React hook used for performing side effects, such as data fetching and subscribing to state changes.

## Folder Structure

The project follows the following folder structure:


/public
/src
  /components
    - Body.js
    - CartItemCard.js
    - Footer.js
    - Navbar.js
    - NoRestaurants.js
    - RestaurantCard.js
  /pages
    - About.js
    - Cart.js
    - Contact.js
    - Error.js
  /utils
    - cartSlice.js
    - store.js
    - useOnline.js
    - useResMenu.js
    - useRestaurants.js
/App.js
/index.js
/index.css
/config.js


## Components

### Body.js

The `Body` component renders the main content of the application, including the search bar, list of restaurants, and conditional rendering based on search results.

### CartItemCard.js

The `CartItemCard` component represents a single item card in the cart, displaying the item image, name, description, and quantity.

### Footer.js

The `Footer` component renders the footer section of the application, displaying the copyright information.

### Navbar.js

The `Navbar` component displays the navigation bar at the top of the application, including links to different pages, a cart icon with the number of items, and a login/logout button.

### NoRestaurants.js

The `NoRestaurants` component renders a message when no restaurants are found based on the search criteria.

### RestaurantCard.js

The `RestaurantCard` component represents a single restaurant card, displaying the restaurant image, name, cuisines, average rating, and other details.

## Redux Slice

### cartSlice.js

The `cartSlice` slice contains actions and reducers for managing the cart state. It includes the following actions:

- `addItem`: Adds an item to the cart.
- `clearCart`: Clears the cart by removing all items.
- `removeItem`: Removes an item from the cart.

## Installation

To run the Food Point React project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [[repository-url](https://github.com/arijitmandal10/food-point-app/)]
   ```

2. Navigate to the project directory:

   ```bash
   cd food-point-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```



## Contributing

Contributions are welcome! If you would like to contribute to the Food Point project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes.
4. Commit and push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

Please ensure that your code follows the project's coding style and conventions.

## License

The Food Point project is licensed under the [MIT License](LICENSE).


