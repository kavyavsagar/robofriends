import React from 'react';


const SearchBox = ({onSearchField}) => {
	return (
		<div className="ma2 pa2"> 
			<label htmlFor="searchbx">Search with : </label>
			<input id="searchbx"
			type="search" 
			className="pa2 bg-lightest-blue ba b--green" 
			placeholder="Search Robots.."
			onChange={onSearchField}
			/>			
		</div>
		);
}

export default SearchBox;