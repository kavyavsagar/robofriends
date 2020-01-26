import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
//import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import 'tachyons';
import Header from './components/Header';
import App from './containers/App';
import About from './containers/About';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers'

const rootReducer = combineReducers({searchRobots, requestRobots});

//const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	<Router>
	  <div>
	  	<Header/>
	    <Switch>
	      <Route path="/about">
	        <About />
	      </Route>
	      <Route path="/contact">
	       	<h2 className="tc f3 f2-m f1-l light-green">CONTACT US</h2>
	      </Route>
	      <Route path="/">
	        <App />
	      </Route>
	    </Switch>
	  </div>
	</Router>
	</Provider>,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


