import React from 'react';
import Navbar from './components/Navbar';
// import { Shimmer } from './components/shimmer';
import { Footer } from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { About } from './pages/about';
import { Cart } from './pages/cart';
import { Contact } from './pages/contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './pages/error';

const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: <Body />,
				},
				{
					path: '/about',
					element: <About />,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/cart',
					element: <Cart />,
				},
				{
					path: '/restaurant/:id',
					element: <RestaurantMenu />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
