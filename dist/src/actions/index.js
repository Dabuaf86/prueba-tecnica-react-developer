export const GET_MOVIES = 'GET_MOVIES';
export const GET_SERIES = 'GET_SERIES';
// export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
// export const GET_SERIES_DETAILS = 'GET_SERIES_DETAILS';

const URL =
	'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const getMovies = () => async dispatch => {
	try {
		const data = await fetch(URL)
			.then(res =>
				res.ok
					? res.json()
					: Promise.reject({
							err: true,
							status: res.status || '400',
							statusText: res.statusText || 'Oops, something went wrong...',
					  })
			)
			.then(data =>
				data.entries.filter(
					el => el.programType === 'movie' && el.releaseYear >= 2010
				)
			);
		dispatch({
			type: GET_MOVIES,
			payload: data,
		});
	} catch (err) {
		alert(err);
	}
};

export const getSeries = () => async dispatch => {
	try {
		const data = await fetch(URL)
			.then(res =>
				res.ok
					? res.json()
					: Promise.reject({
							err: true,
							status: res.status || '400',
							statusText: res.statusText || 'Oops, something went wrong...',
					  })
			)
			.then(data =>
				data.entries.filter(
					el => el.programType === 'series' && el.releaseYear >= 2010
				)
			);
		dispatch({
			type: GET_SERIES,
			payload: data,
		});
	} catch (err) {
		alert(err);
	}
};

// export const getMovieDetails = title => async dispatch => {
// 	try {
// 		const data = await fetch(URL)
// 			.then(res =>
// 				res.ok
// 					? res.json()
// 					: Promise.reject({
// 							err: true,
// 							status: res.status || '400',
// 							statusText: res.statusText || 'Oops, something went wrong...',
// 					  })
// 			)
// 			.then(data =>
// 				data.entries.filter(
// 					el => el.programType === 'movie' && el.title === title
// 				)
// 			);
// 		dispatch({
// 			type: GET_MOVIE_DETAILS,
// 			payload: data,
// 		});
// 	} catch (err) {
// 		alert(err);
// 	}
// };

// export const getSeriesDetails = title => async dispatch => {
// 	try {
// 		const data = await fetch(URL)
// 			.then(res =>
// 				res.ok
// 					? res.json()
// 					: Promise.reject({
// 							err: true,
// 							status: res.status || '400',
// 							statusText: res.statusText || 'Oops, something went wrong...',
// 					  })
// 			)
// 			.then(data =>
// 				data.entries.filter(
// 					el => el.programType === 'series' && el.title === title
// 				)
// 			);
// 		dispatch({
// 			type: GET_SERIES_DETAILS,
// 			payload: data,
// 		});
// 	} catch (err) {
// 		alert(err);
// 	}
// };
