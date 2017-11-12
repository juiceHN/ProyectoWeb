import React, { Component } from 'react';
import './App.css'
class Top extends Component{

render() {
	return(
		<div className="primer" >
        <p className>SPEED MATTERS:</p>
        <p>DESIGNING FOR MOBILE PERFORMACE</p>

        <div className="texto">
        	<h3>100% BRAIN FOOD</h3>
        </div>
        <p>A special collaboration with:</p>
        <div className="linea">|</div>
        <img className="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/6/68/Google_logo_white_2015.png/revision/latest/scale-to-width-down/640?cb=20150901162827"/>
        
        <div className='buttonD' href="www.google.com" target="_blank" >DOWNLOAD NOW!</div>

        <div className='redes'>
        	<img className="facebook" src="http://www.leftalive.nl/wp-content/themes/LeftAliveWPTheme/img/icons/icon-fb-white.png" href="facebook.com"/>
        	<img className="twitter1" src="http://housing.virginia.edu/sites/housing.virginia.edu/files/Twitter-256.png" href="twitter.com" target="_blank"/>
        	<img className="gplus" src="https://www.psywar.org/theme/sm_googleplusone.png" href="google.com" target="_blank"/>
        	<img className="pinterest" src="https://s3.amazonaws.com/cision-wp-files/us/wp-content/uploads/2015/04/pinterest-logo-white.png" href="pinterest.com"target="_blank"/>
        </div>
        </div>
		);
	}

}

export default Top;
