import { useRouteError, Link } from 'react-router-dom'; // import useRouteError for routing error

const Error = () => {
	// call useRouteError so we can access error data while routing
	const err = useRouteError();
	return (
		<div className='error-page'>
			<h2>Oops! The restaurant you're looking for can't be found. sad-🥺 </h2>
			<h4 className='error-data'>{err.data}</h4>
			<h4 className='error-back-home'>
				<Link to='/'>Back Home</Link>
			</h4>
		</div>
	);
};

export default Error;
