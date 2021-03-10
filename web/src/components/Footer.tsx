import React from 'react';

// Images
import LogoYoutube 	from '../images/youtubeLogo.png';
import LogoFacebook	from '../images/facebookLogo.png';
import LogoSpotify 	from '../images/spotifyLogo.png';

function Footer(){
	return(
		<footer className="main-footer">
        	<div className="container main-footer-container">
        		<h3 className="band-name">The Generics</h3>
        		<ul className="nav footer-nav">
        			<li><a href="https://www.youtube.com" target="_blank"><img src={LogoYoutube} /></a></li>
        			<li><a href="https://www.spotify.com" target="_blank"><img src={LogoSpotify} /></a></li>
        			<li><a href="https://www.facebook.com" target="_blank"><img src={LogoFacebook} /></a></li>
        		</ul>
        	</div>
	    </footer>
	);
}

export default Footer;