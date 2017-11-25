import React, { Component } from 'react';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';
import TiSocialPinterest from 'react-icons/lib/ti/social-pinterest';
class Top extends Component{

render() {
	return(
	<div className="primer" >
                <p className>SPEED MATTERS:</p>
                <p>DESIGNING FOR MOBILE PERFORMACE</p>
                <p className='brainfood'>100% <br />BRAIN <br />FOOD!</p>
                <p>A special collaboration with:</p>
                <div className="linea">|</div>
                <a href='https://developers.google.com/'>
                <img 
                className="logo" 
                src="https://vignette.wikia.nocookie.net/logopedia/images/6/68/Google_logo_white_2015.png/revision/latest/scale-to-width-down/640?cb=20150901162827"
                alt="Google"
                />
                </a>
                <div className='espacio'/>
                <a href='https://www.awwwards.com/brain-food-perceived-performance/'>
                        <div className='buttonD'>DOWNLOAD NOW!</div>
                </a>

                <div className='redes'>
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
        </div>
		);
	}

}

export default Top;
