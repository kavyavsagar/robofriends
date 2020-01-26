import React from 'react';

const SortList = ({onSortField}) => {
	return (
		<div className="ma2 pa2">
		<label htmlFor="sortby">Sortby : </label>
		<select onChange={onSortField} className="pa2 bg-lightest-blue ba b--green" id="sortby">
			<option value="">-- Default Sort --</option>
			<option value="name">By Name</option>
			<option value="id">By ID</option>
		</select>
		</div>
		);
}


export default SortList;