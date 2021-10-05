const PageList = (totalItems, itemsPerPage, pages = []) => {
	const rounded = Math.ceil(totalItems / itemsPerPage);
	for (let i = 1; i <= rounded; i++) {
		pages.push(i);
	}
	return pages;
};

export default PageList;
