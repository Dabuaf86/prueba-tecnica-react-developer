// import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';
import './Home.css';
import png from '../../assets/placeholder.png';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='card'>
				<NavLink to='/pelis' className='card-link'>
					<h2>MOVIES</h2>
					<img src={png} alt='poster' />
				</NavLink>
				<p className='card-subtitle'>Popular Movies</p>
			</div>
			<div className='card'>
				<NavLink to='/series' className='card-link'>
					<h2>SERIES</h2>
					<img src={png} alt='poster' />
				</NavLink>
				<p className='card-subtitle'>Popular Series</p>
			</div>
		</div>
	);
};

export default Home;
