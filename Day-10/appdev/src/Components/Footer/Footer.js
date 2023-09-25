import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

function Footer() {
      const openURLInNewTabb = () => {
        window.open('https://chennai.nic.in/helpline/', '_blank');
      };
    const navigate = useNavigate();
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <p onClick={() => navigate('/about')}>About</p>
                </div>
                <div>
                    <p onClick={() => navigate('/privacy')}>Privacy</p>
                </div>
                <div>
                    <p onClick={() => navigate('/terms')}>Terms</p>
                </div>
                <div>
                    <p onClick={() =>navigate('/faq')}>FAQ's</p>
                </div>
                <div>
                    <p onClick={openURLInNewTabb}>Help</p>
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2023 Mr.DIY from Jack's</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);