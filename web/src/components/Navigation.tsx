import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(){
	return(
		<nav className="main-nav nav">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/store">STORE</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
	);
}

export default Navigation;