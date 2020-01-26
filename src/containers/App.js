import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, setSortField,  requestRobots} from '../actions';

import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import SortList from '../components/SortList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		sortField: state.searchRobots.sortField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHandleSearch: (event) => dispatch(setSearchField(event.target.value)),
		onHandleSort: (event) => dispatch(setSortField(event.target.value)),
		requestRobots: () => dispatch(requestRobots())
	}
}

class App extends React.Component{
	componentDidMount(){
		this.props.requestRobots();
	}

	render(){
		const {searchField, sortField, onHandleSearch, onHandleSort, isPending, robots} = this.props;

		const filteredRobot = robots.filter((robo) => 
				{
					return robo.name.toLowerCase().includes(searchField.toLowerCase());
				}
			);

		const sorted = filteredRobot.sort(function(a, b){		
			if(sortField === 'id'){ 
				return a.id-b.id;
			}else if(sortField === 'name'){ 
				return (a.name < b.name)? -1: 1;
			}else{ return b.id-a.id;}
		});

		return (isPending)? <h1 className="f1 tc">LOADING...</h1>:
			(
				<div className="tc helvetica"> 
					<div className="mw9 center ph3-ns">
					  <div className="cf ph2-ns">
					    <div className="fl w-100 w-25-ns pa2">
					    </div>
					    <div className="fl w-100 w-25-ns pa2">
					    	<SearchBox onSearchField={onHandleSearch}/>
					    </div>
					    <div className="fl w-100 w-25-ns pa2">
					    	<SortList onSortField={onHandleSort} />
					    </div>
					    <div className="fl w-100 w-25-ns pa2">					      
					    </div>
					  </div>
					</div>
					<Scroll>	
						<ErrorBoundary>			
							<CardList robots={sorted} />
						</ErrorBoundary>
					</Scroll>					
				</div>
			);
		
	}
	
};

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)