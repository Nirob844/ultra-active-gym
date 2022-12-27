import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            <a href="/">Ultra Active Club</a>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;