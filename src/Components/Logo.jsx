import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../img/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <div className='img'>
                <NavLink to='/sorev'><img src={logoImg} alt="logo" /></NavLink>
            </div>
        </div>
    );
}

export default Logo;