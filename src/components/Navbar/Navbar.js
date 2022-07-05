import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-heading'>
            <h1> Meals <span> App </span> </h1>
        </div>
        <div className='navbar-links'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/random">Random</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar