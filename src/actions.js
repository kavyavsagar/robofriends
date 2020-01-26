import {CHANGE_SEARCH_FIELD,
		CHANGE_SORT_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_ERROR
	} from './constants';

export const setSearchField = (text) => {	
	return { 
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}
}
export const setSortField = (opval) => {	
	return {
		type: CHANGE_SORT_FIELD,
		payload: opval
	}
}

export const requestRobots = () => (dispatch) => {
	dispatch({type : REQUEST_ROBOTS_PENDING});
	fetch("https://jsonplaceholder.typicode.com/users/")
		.then(response => response.json())
		.then(users =>  dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}) )
		.catch(error => dispatch({type: REQUEST_ROBOTS_ERROR, payload: error}));
}