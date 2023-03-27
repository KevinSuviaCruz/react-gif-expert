export const GifItem = ({ id, url, title }) => {
	return (
		<div className='card' key={id}>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};
