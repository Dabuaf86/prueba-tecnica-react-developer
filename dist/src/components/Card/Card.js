import '../Cards.css';

const Card = ({ title, image }) => {
	return (
		<div className='card-content'>
			<img src={image} alt={`${title}`} width='180' />
			<p className='card-title'>{title}</p>
		</div>
	);
};

export default Card;
