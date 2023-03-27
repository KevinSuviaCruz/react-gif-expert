import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
	const [images, setTImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getItems = async () => {
		const newItems = await getGifs(category);
		setTImages(newItems);
		setIsLoading(false);
	};
	useEffect(() => {
		getItems();
	}, []);
	return {
		images,
		isLoading,
	};
};
