import React from 'react'
import './Footer.css';
import LoadingPage from '../LoadingPage/LoadingPage';

function Footer() {
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <p>About</p>
                </div>
                <div>
                    <p>Blog</p>
                </div>
                <div>
                    <p>Privacy</p>
                </div>
                <div>
                    <p>Terms</p>
                </div>
                <div>
                    <p>Help</p>
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2023 E-crafts from D-I-Y</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);