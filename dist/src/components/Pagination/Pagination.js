import './Pagination.css';

const Pagination = ({
	totalItems,
	itemsPerPage = 20,
	paginate,
	currentPage,
}) => {
	const pages = [];
	const rounded = Math.ceil(totalItems / itemsPerPage);
	for (let i = 1; i <= rounded; i++) {
		pages.push(i);
	}

	// const handleClick = e => {
	// 	setCurrentPage(Number(e.target.id));
	// };

	// const renderPageNumbers = pages.map(number => (
	// 	<li key={number} id={number} onClick={handleClick}>
	// 		{number}
	// 	</li>
	// ));

	return (
		<div className='page-container'>
			<button disabled>◀ Prev</button>
			{pages &&
				pages.map(num => (
					<button
						key={num}
						className={`pageNumbers ${num === currentPage ? 'active' : ''}`}
						onClick={() => paginate(num)}
					>
						{num}
					</button>
				))}
			<button disabled>Sig ▶</button>
		</div>
	);
};

export default Pagination;
