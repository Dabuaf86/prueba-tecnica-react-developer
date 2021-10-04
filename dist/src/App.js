import './App.css';
import { Route } from 'react-router';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Foot from './components/Foot/Foot';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Route exact path='/' component={Home} />
			<Route path='/pelis' component={Movies} />
			<Route path='/series' component={Series} />
			<Foot />
		</div>
	);
}

export default App;
