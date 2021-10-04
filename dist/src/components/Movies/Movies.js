import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions';
import '../Cards.css';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [currentCard, setCurrentCard] = useState({
		title: '',
		image: '',
		description: '',
		released: '',
	});
	const [currentPage, setCurrentPage] = useState(1);

	const movies = useSelector(state => state.movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
		// console.log('LAS PELIS: ', movies);
	}, []);

	const itemsPerPage = 20;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = num => setCurrentPage(num);

	return (
		<div className='card-continer'>
			{currentItems &&
				currentItems.map((el, i) => (
					<div
						onClick={() => {
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
				))}
			{isOpened && (
				<Modal isOpened={isOpened} setIsOpened={setIsOpened}>
					<ModalCard currentCard={currentCard} />
				</Modal>
			)}
			<div className='pagination-cont'>
				<Pagination
					totalItems={currentItems.length}
					itemsPerPage={itemsPerPage}
					paginate={paginate}
				/>
			</div>
		</div>
	);
};

export default Movies;
