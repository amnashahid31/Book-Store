import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='leftNave'>
              <Link to="/" className='brand'>Book Lounge</Link>
            </div>
            <div className='rightNav'>
               <Link to="/books" className='navLink'>Books</Link>
               <Link to="/login" className='navLink'>Login</Link>
               
            </div>
        </nav>
    )
}

export default Navbar;