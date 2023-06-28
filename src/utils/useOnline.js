import { useEffect, useState } from 'react';

export const useOnline = () => {
	const [isOnline, setisOnline] = useState(true);
	const handleOnline = () => {
		setisOnline(true);
	};
	const handleOffline = () => {
		setisOnline(false);
	};

	useEffect(() => {
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return isOnline;
};
