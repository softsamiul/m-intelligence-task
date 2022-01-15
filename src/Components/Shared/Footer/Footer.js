import React from 'react';
import Logo from '../../../assets/images/logo.png';
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footer-main-wrapper'>
            <div className='footer-content-wrap'>
                <img src={Logo} alt="Logo img" />
                <span className='footer-brand-text'>Unified Analytics</span>
            </div>
        </div>
    );
};

export default Footer;