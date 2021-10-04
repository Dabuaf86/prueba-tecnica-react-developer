import './Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, paginate }) => {
	const pages = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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
			{/* <ul className='pageNumbers'> */}
			{/* <button>◀ Prev</button> */}
			<a href='#' className='pageNumbers'>
				◀ Prev
			</a>
			{pages &&
				pages.map(num => (
					<a
						key={num}
						className='pageNumbers'
						onClick={() => paginate(num)}
						href='#'
					>
						{num}
					</a>
				))}
			<a href='#' className='pageNumbers'>
				Sig ▶
			</a>
			{/* <button>Sig ▶</button> */}
			{/* </ul> */}
		</div>
	);
};

export default Pagination;
