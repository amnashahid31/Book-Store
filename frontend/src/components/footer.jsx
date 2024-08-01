import React from 'react';
import '../App.css'; 

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='leftFooter'>
                <a href="/" className='brandFooter'>Book Lounge</a>
            </div>
            <div className='centerFooter'>
                <div className='socialIcons'>
                    <a href="https://facebook.com">
                        <img src="/images/facebook.png" alt="Facebook" className='socialIcon' />
                    </a>
                    <a href="https://linkedin.com">
                        <img src="/images/linkedin.png" alt="LinkedIn" className='socialIcon' />
                    </a>
                    <a href="https://instagram.com">
                        <img src="/images/intagram.png" alt="Instagram" className='socialIcon' />
                    </a>
                </div>
            </div>
            <div className='rightFooter'>
                <p>Contact us:</p>
                <p> +92 123 3452635</p>
                <p>Email: booklounge@gmail.com</p>
            </div>
        </footer>
    );
}

export default Footer;
