import React, { Component } from 'react';
import './App.css'
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';
import TiSocialPinterest from 'react-icons/lib/ti/social-pinterest';
import FaHandPaperO from 'react-icons/lib/fa/hand-paper-o';

class Texto2 extends Component{
	render(){
		return(

			<div className='textoE'>
				<div className='mano'>
					<FaHandPaperO className='mano'/>
				</div>
				<div className='espacio2' />
				<TiSocialTwitter className="twitter2" /> 
				<br />
				<div className='contexto2'>
					<p>Download Speed Matters: Designing for mobile performance in exchange for <b>just one Tweet!</b></p>
				</div>
				<a href='https://twitter.com/?lang=en'>
					<div className='buttonD'>SHARE THIS!</div>
				</a>
				<div className='espacio' />
				<p>Made with ♥ Please, share!</p>
				<div className='redes2'>
                    <a href='https://www.facebook.com/'>
                            <TiSocialFacebook className='social'/>
                    </a>
                    <a href='https://twitter.com/?lang=en'>
                            <TiSocialTwitter className='social' />
                    </a>
                    <a href='https://plus.google.com/discover'>
                            <TiSocialGooglePlus className='social' />
                    </a>
                    <a href='https://www.pinterest.com/'>
                            <TiSocialPinterest className='social' />
                    </a>
	       		</div>
 				<div className='espacio2' />
			</div>

			);
	}
}

export default Texto2;