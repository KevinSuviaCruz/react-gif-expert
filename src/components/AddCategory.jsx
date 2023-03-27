import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
		// valor = 'Introduzca un valor';
		// setInputValue(valor);
	};
	const onSubmit = event => {
		event.preventDefault();
		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 1) return;
		onNewCategory(newInputValue);
		setInputValue('');
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder={'escribe'}
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
