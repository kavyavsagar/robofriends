import React from 'react';
import { 
  Link
} from "react-router-dom";

const Header = () => {
	return (
		<nav className="pa3 pa4-ns helvetica">
		  <Link to="/" className="link dim f-headline-ns tc db mb3 mb4-ns"><h1 className="f1">RoboFriends</h1></Link>
		  <div className="tc pb3">		   
		    <Link to="/" className="link dim b hot-pink f6 f5-ns dib mr3">HOME</Link>
		    <Link to="/about" className="link dim b hot-pink f6 f5-ns dib mr3" title="About">ABOUT</Link>		    
		    <Link to="/contact" className="link dim b hot-pink f6 f5-ns dib" title="Contact">CONTACT</Link>
		  </div>
		</nav>
	)
}

export default Header;