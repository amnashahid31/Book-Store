import React from 'react';
import '../App.css';

const Home = () => {
    return (
        <div className='homepage'>
            {/* Text on left side of page */}
            <div className='hContent'>
               <h1 className='hText'>Book Shop</h1>
               <p className='hPara'>
               "Discover your next favorite book with ease at our seamless, user-friendly online bookshop!"
               </p>
            </div>
            {/* Image on right side of the page */}
            <div className='hImage'></div>
            <div className='centerContent'>

            </div>
        </div>
    )
}

export default Home;