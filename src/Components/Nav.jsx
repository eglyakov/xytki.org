import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to='/sorev'>Главная</NavLink></li>
                <li><a href="/">Новости</a></li>
                <li><a href="/">События</a></li>
                <li><a href="/">Регистрация</a></li>
                <li><a href="/">Контакты</a></li>
            </ul>
        </nav>
    );
}

export default Nav;