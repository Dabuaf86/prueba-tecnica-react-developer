import './Nav.css';
const Nav = () => {
	return (
		<nav>
			<span className='upper-container'>
				<h1 className='nav-blue'>DEMO Streaming</h1>
				<span>
					<a href='#'>Login</a>
					<button className='nav-btn'>Start your free trial</button>
				</span>
			</span>
			<span className='blw-container'>
				<h2 className='nav-dark-gray'>Popular Titles</h2>
			</span>
		</nav>
	);
};

export default Nav;
