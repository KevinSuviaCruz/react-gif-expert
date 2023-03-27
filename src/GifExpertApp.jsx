import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	// const x = 'ADADA';
	// x.toLowerCase();
	// console.log(x.toLowerCase());
	const [categories, setCategories] = useState(['One Punch']);
	const onAddCategory = value => {
		// const categoriesMinus = categories.map(x => x.toLowerCase());
		const valueMinus = value.toLowerCase();
		if (categories.includes(valueMinus)) return;
		setCategories([valueMinus, ...categories]);
	};
	return (
		<>
			<h1>GifExpert</h1>

			<AddCategory onNewCategory={onAddCategory} />
			{categories.map(category => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
