import { useEffect, useState } from 'react';

export const useOnline = () => {
	const [isOnline, setisOnline] = useState(true);

	useEffect(() => {
		window.addEventListener('online', () => {
			setisOnline(true);
		});

		window.addEventListener('offline', () => {
			setisOnline(false);
		});
	}, []);

	return isOnline;
};
