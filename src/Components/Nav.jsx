import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-item hover-DM">
                    <NavLink to='/sorev'>Мероприятия</NavLink>
                    <ul className="down-menu">
                        <li><NavLink to='/sorev-coming-all'>Предстоящие</NavLink></li>
                        <li><NavLink to='/sorev-past-all'>Прошедшие</NavLink></li>
                    </ul>
                </li>
                <li className="nav-item"><NavLink to="/info">Информация</NavLink></li>
                <li className="nav-item"><NavLink to="/personal-date">Личные дынные</NavLink></li>
                <li className="nav-item"><NavLink to='/add-car'>Добавить автомобиль</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;