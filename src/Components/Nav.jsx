import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenu: false
        }

        this.openMenu = this.openMenu.bind(this);
    }

    componentDidMount() {
        this.openMenu();
    }

    openMenu() {
        let navMob = document.querySelector('.nav-mobile'),
            mobMenu = navMob.querySelector('.nav-menu');

        this.setState(prevState => ({
            openMenu: !prevState.openMenu
        }));

        if(this.state.openMenu) {
            navMob.classList.add('open');
            mobMenu.classList.add('open');
        } else {
            navMob.classList.remove('open');
            mobMenu.classList.remove('open');
        }
    }

    render() {
        return (
            <div>
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


                <nav className="nav-mobile" onClick={this.openMenu}>
                    <ul className="nav-menu">
                        <div className="burger">
                            <span className="icon-burg"></span>
                            <span className="icon-burg"></span>
                            <span className="icon-burg"></span>
                        </div>

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
                        <li className="nav-item"><NavLink to='/auth/auth-enter'>Авторизация</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;