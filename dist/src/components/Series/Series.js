import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries } from '../../actions';
import '../Cards.css';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import Pagination from '../Pagination/Pagination';
import ClassToggle from '../../helpers/ClassToggle';
import Loader from '../Loader/Loader';

const Series = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [currentCard, setCurrentCard] = useState({
		title: '',
		image: '',
		description: '',
		released: '',
	});
	const [currentPage, setCurrentPage] = useState(1);

	const series = useSelector(state => state.series);
	const seriesLength = useSelector(state => state.seriesLength);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSeries());
		// console.log('LAS SERIES: ', series);
	}, []);

	const itemsPerPage = 20;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = series.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = num => setCurrentPage(num);

	return (
		<div className='card-container'>
			{currentItems < 1 ? (
				<Loader />
			) : (
				currentItems &&
				currentItems.map((el, i) => (
					<div
						onClick={() => {
							ClassToggle('body', 'modalShown');
							setIsOpened(true);
							setCurrentCard({
								...currentCard,
								title: el.title,
								image: el.images['Poster Art']['url'],
								description: el.description,
								released: el.releaseYear,
							});
						}}
					>
						<Card
							key={i}
							title={el.title}
							image={el.images['Poster Art']['url']}
						/>
					</div>
				))
			)}
			{isOpened && (
				<Modal isOpened={isOpened} setIsOpened={setIsOpened}>
					<ModalCard currentCard={currentCard} />
				</Modal>
			)}
			<div className='pagination-cont'>
				<Pagination
					totalItems={seriesLength}
					itemsPerPage={itemsPerPage}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default Series;
