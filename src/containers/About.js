import React from 'react';
import Scroll from '../components/Scroll';
import Content from '../components/Content';
import './About.css';

class About extends React.Component{
	render(){	
		return (
			<div className="tc helvetica"> 
				<h2 className="f3 f2-m f1-l light-green">ABOUT ROBO</h2>				
				<Scroll>	
					<Content/>
				</Scroll>					
			</div>
		);
		
	}
	
};

export default About