import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'; 
import Logo from '../Logo';
import AuthReg from './AuthReg';
import AuthEnter from './AuthEnter';


const Auth = () => {

    return (
        <BrowserRouter>
        <div className="wrapper-auth">
            <div className="auth">
                <Logo />

                <div className="btn-block">
                    <NavLink to='/auth/auth-enter'>Вход</NavLink>
                    <NavLink to='/auth/auth-reg'>Регистрация</NavLink>
                </div>

                <Route path='/auth/auth-enter' component={AuthEnter} />
                <Route path='/auth/auth-reg' component={AuthReg} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Auth;