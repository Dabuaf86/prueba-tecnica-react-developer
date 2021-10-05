import PageList from '../../helpers/PageList';
import './Pagination.css';

const Pagination = ({
	totalItems,
	itemsPerPage = 20,
	paginate,
	currentPage,
	maxPageNumber,
	minPageNumber,
}) => {
	const pages = PageList(totalItems, itemsPerPage);

	const handleClick = e => {
		paginate(e.target.name);
	};

	const renderPageNumbers = pages.map(pageNum => {
		if (pageNum > minPageNumber && pageNum < maxPageNumber + 1)
			return (
				<li
					key={pageNum}
					className={`pageNumbers ${pageNum === currentPage ? 'active' : ''}`}
					onClick={() => paginate(pageNum)}
				>
					{pageNum}
				</li>
			);
		else return null;
	});

	return (
		<div className='page-container'>
			<button className='pageNumbers' name='prev' onClick={handleClick}>
				◀
			</button>
			<button className='pageNumbers' name='first' onClick={handleClick}>
				◀◀
			</button>
			{renderPageNumbers}
			<button className='pageNumbers' name='last' onClick={handleClick}>
				▶▶
			</button>
			<button className='pageNumbers' name='next' onClick={handleClick}>
				▶
			</button>
		</div>
	);
};

export default Pagination;
