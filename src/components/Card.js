import React from 'react';

const Card = (props) => {
	return (
		<div className="dib bg-light-green tc bw2 b--green pa3 ma2 br2 grow shadow-2"> 
			<img src={`https://robohash.org/${props.id}?200*200`} alt="robots"/>
			<div>
				<h2> {props.name} </h2>
				<p> {props.email}</p>
			</div>
		</div>
	);
}

export default Card;