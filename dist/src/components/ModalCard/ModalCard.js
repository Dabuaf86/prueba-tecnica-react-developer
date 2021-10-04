// import '../ModalCard.css';

const ModalCard = ({ currentCard }) => {
	const { title, image, description, released } = currentCard;

	return (
		<div className='modal-children'>
			<div className='modal-poster'>
				<img src={image} alt={title} />
			</div>
			<div className='modal-details'>
				<h3 className='modal-title'>{title}</h3>
				<span className='modal-description'>{description}</span>
				<span className='modal-year'>{released}</span>
			</div>
		</div>
	);
};

export default ModalCard;
