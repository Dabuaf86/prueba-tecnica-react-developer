import {
	GET_MOVIES,
	GET_SERIES,
	// GET_MOVIE_DETAILS,
	// GET_SERIES_DETAILS,
} from '../actions/index';

const initialState = {
	movies: [],
	series: [],
	// movieDetails: {},
	// seriesDetails: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case GET_SERIES:
			return {
				...state,
				series: action.payload,
			};
		// case GET_MOVIE_DETAILS:
		// 	return {
		// 		...state,
		// 		movieDetails: { ...action.payload },
		// 	};
		// case GET_SERIES_DETAILS:
		// 	return {
		// 		...state,
		// 		seriesDetails: { ...action.payload },
		// 	};
		default:
			return state;
	}
};
export default rootReducer;
