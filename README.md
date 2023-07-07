# Food Point

Food Point is a web application that allows users to explore restaurants, view their menus, and place orders online. Users can search for restaurants based on their location, browse through menus, add items to the cart, and complete the checkout process.

## Features

- Search for restaurants based on location.
- View restaurant details, including name, ratings, and reviews.
- Browse through restaurant menus and view item details.
- Add items to the cart and adjust quantities.
- View the cart, update quantities, and remove items.
- Place orders and complete the checkout process.
- Track order status and view order history.

## Folder Structure

The project follows the following folder structure:

- public/
  - index.html: The main HTML file that serves as the entry point of the application.

- src/
  - components/
    - Body.jsx: Component for the main content of the application.
    - CartItemCard.jsx: Component for rendering a single item card in the cart.
    - Footer.jsx: Component for the footer section of the application.
    - Navbar.jsx: Component for the navigation bar.
    - NoRestaurants.jsx: Component to display when no restaurants are available.
    - RestaurantCard.jsx: Component for rendering a single restaurant card.
    - RestaurantMenu.jsx: Component for displaying the menu of a restaurant.
    - Shimmer.jsx: Component for displaying a shimmer effect while content is loading.

  - pages/
    - about.js: Page component for the "About" page.
    - cart.js: Page component for the "Cart" page.
    - contact.js: Page component for the "Contact" page.
    - error.js: Page component for the "Error" page.

  - utils/
    - cartSlice.js: Redux slice for managing the cart state.
    - helper.js: Utility functions used in the application.
    - store.js: Redux store configuration.
    - useOnline.js: Custom hook for checking online/offline status.
    - useResMenu.js: Custom hook for fetching restaurant menu data.
    - useRestaurant.js: Custom hook for fetching restaurant data.

- App.js: The main component of the application.
- index.js: The entry point of the application.
- index.css: CSS styles for the entire application.
- .gitignore: Specifies files and directories to be ignored by version control.
- package-lock.json: Auto-generated file for package dependencies.
- package.json: Contains project metadata and dependencies.


## Technologies Used

- React.js: JavaScript library for building user interfaces.
- Redux: State management library for JavaScript applications.
- React Router: Library for routing in React applications.
- Redux Thunk: Middleware for handling asynchronous actions in Redux.
- Axios: Promise-based HTTP client for making API requests.

## Libraries and Hooks

- [React Router DOM](https://reactrouter.com/web/guides/quick-start): DOM bindings for React Router.
- [Redux Toolkit](https://redux-toolkit.js.org/): Official package for efficient Redux development.
- [React Redux](https://react-redux.js.org/): Official React bindings for Redux.
- [axios](https://github.com/axios/axios): Promise-based HTTP client for making API requests.
- [react-toastify](https://fkhadra.github.io/react-toastify/): Library for displaying toast notifications in React applications.
- [react-icons](https://react-icons.github.io/react-icons/): Library for adding icons to React applications.

## Screenshots

Include screenshots of your application here to provide a visual representation of the user interface.

## Deployed Link

The Food Point web application is deployed and can be accessed using the following link:

[https://food-point-example.com](https://food-point-example.com)

## Getting Started

To run the project locally, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine or download the source code.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run `npm install` to install the dependencies.
5. After the installation is complete, run `npm start` to start the development server.
6. Open `http://localhost:3000` in your web browser to view the application.

## Contributing

Contributions to the Food Point project are welcome! If you find any bugs or have suggestions for improvement, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
