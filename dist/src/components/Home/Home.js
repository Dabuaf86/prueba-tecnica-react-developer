// import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';
import './Home.css';
import png from '../../assets/placeholder.png';
import '../Cards.css';

const Home = () => {
	return (
		<div className='card-container'>
			<div className='card'>
				<h2 className='card-title'>MOVIES</h2>
				<NavLink to='/pelis' className='card-link'>
					<img className='card-img' src={png} alt='poster' />
				</NavLink>
				<p className='card-subtitle'>Popular Movies</p>
			</div>
			<div className='card'>
				<h2 className='card-title'>SERIES</h2>
				<NavLink to='/series' className='card-link'>
					<img className='card-img' src={png} alt='poster' />
				</NavLink>
				<p className='card-subtitle'>Popular Series</p>
			</div>
		</div>
	);
};

export default Home;
