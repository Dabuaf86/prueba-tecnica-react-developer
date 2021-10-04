const ClassToggle = (element, _class) => {
	const el = document.getElementsByTagName(element)[0];
	if (el.className !== '') el.className = '';
	else el.className = _class;
};

export default ClassToggle;
