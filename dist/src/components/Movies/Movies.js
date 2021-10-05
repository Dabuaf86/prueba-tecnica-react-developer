import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import ModalCard from '../ModalCard/ModalCard';
import Pagination from '../Pagination/Pagination';
import ClassToggle from '../../helpers/ClassToggle';
import PageList from '../../helpers/PageList';
import '../Cards.css';

const initialState = {
	isOpened: false,
	currentCard: { title: '', image: '', description: '', released: '' },
	currentPage: 1,
	maxPageNumber: 5,
	minPageNumber: 0,
};

const Movies = () => {
	const [isOpened, setIsOpened] = useState(initialState.isOpened);
	const [currentCard, setCurrentCard] = useState(initialState.currentCard);
	const [currentPage, setCurrentPage] = useState(initialState.currentPage);
	const [maxPageNumber, setMaxPageNumber] = useState(
		initialState.maxPageNumber
	);
	const [minPageNumber, setMinPageNumber] = useState(
		initialState.minPageNumber
	);

	const movies = useSelector(state => state.movies);
	const moviesLength = useSelector(state => state.moviesLength);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, []);

	const pageNumberLimit = 5;
	const itemsPerPage = 20;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

	const pages = PageList(moviesLength, itemsPerPage);

	const paginate = e => {
		if (typeof e === 'number') setCurrentPage(e);
		else if (e === 'prev' && currentPage !== 1) {
			setCurrentPage(currentPage - 1);
			if ((currentPage - 1) % pageNumberLimit === 0) {
				setMaxPageNumber(maxPageNumber - pageNumberLimit);
				setMinPageNumber(minPageNumber - pageNumberLimit);
			}
		} else if (e === 'next' && currentPage <= pages.length - 1) {
			setCurrentPage(currentPage + 1);
			if (currentPage + 1 > maxPageNumber) {
				setMaxPageNumber(maxPageNumber + pageNumberLimit);
				setMinPageNumber(minPageNumber + pageNumberLimit);
			}
		} else if (e === 'first') {
			setCurrentPage(1);
			setMaxPageNumber(initialState.maxPageNumber);
			setMinPageNumber(initialState.minPageNumber);
		} else if (e === 'last') {
			setCurrentPage(pages.length);
			if (currentPage + 1 > maxPageNumber) {
				setMaxPageNumber(maxPageNumber + pageNumberLimit);
				setMinPageNumber(minPageNumber + pageNumberLimit);
			}
		}
	};

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
					totalItems={moviesLength}
					itemsPerPage={itemsPerPage}
					paginate={paginate}
					currentPage={currentPage}
					maxPageNumber={maxPageNumber}
					minPageNumber={minPageNumber}
				/>
			</div>
		</div>
	);
};

export default Movies;
