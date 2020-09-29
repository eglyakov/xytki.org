import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom';
import './App.css';
import Logo from './Components/Logo';
import Nav from './Components/Nav';
import Sorev from './Components/Sorev/Sorev';
import Auth from './Components/Auth/Auth';
import News from './Components/News';


function App() {
	return (
		<BrowserRouter>
		<div className="xytki">

			<header className="header">
				<div className="container">				
					<Logo />
					<Nav />
					<div className="btn-auth">
						<NavLink to='/auth/auth-enter'>Авторизация</NavLink>
					</div>
				</div>
			</header>

			<main className="main">
				<div className="container">

					<Route path='/sorev' component={Sorev} />
					<Route path='/auth' component={Auth} />
					<Route path='/sorev' component={News} />		

				</div>
			</main>

			<footer className="footer">
				<div className="container">
					© 2020 Created by Виктор Гляков и Дмитрий Рабецкий
				</div>
			</footer>
		</div>
		</BrowserRouter>
	);
}

export default App;
