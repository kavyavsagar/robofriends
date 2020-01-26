import {CHANGE_SEARCH_FIELD,
		CHANGE_SORT_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_ERROR
	} from './constants';

const initialStateSearch = {
	searchField: '',
	sortField: ''
};

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
			//return {...state, searchField: action.payload}
		case CHANGE_SORT_FIELD:
			return Object.assign({}, state, {sortField: action.payload})
		default:
			return state
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
};

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_ERROR:
			return Object.assign({}, state, {error: action.payload})
		default:
			return state
	}
}