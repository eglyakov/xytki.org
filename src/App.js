import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom';

import './css/App.css';
import './css/Nav.css';
import './css/Sorev.css';
import './css/Info.css';
import './css/Auth.css';
import './css/AddCar.css';

import Logo from './Components/Logo';
import Nav from './Components/Nav';
import Auth from './Components/Auth/Auth';
import News from './Components/News';
import Sorev from './Components/Sorev/Sorev';
import SorevComingAll from './Components/Sorev/SorevComingAll';
import SorevPastAll from './Components/Sorev/SorevPastAll';
import Info from './Components/Info/Info';
import PersonalDate from './Components/PersonalDate';
import AddCar from './Components/AddCar/AddCar';

import SorevItem from './Components/Sorev/SorevItem';


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
					<Route path='/sorev-coming-all' component={SorevComingAll} />
					<Route path='/sorev-past-all' component={SorevPastAll} />
					<Route path='/sorev' component={News} />
					<Route path='/sorev-coming-all' component={News} />
					<Route path='/sorev-past-all' component={News} />

					<Route path='/info' component={Info} />
					<Route path='/personal-date' component={PersonalDate} />
					<Route path='/add-car' component={AddCar} />

					<Route path='/doh-bolota' component={SorevItem} />

					<Route path='/auth' component={Auth} />

				</div>
			</main>

			<footer className="footer">
				<div className="container">
					© 2020 Created by Виктор Гляков и Егор Гляков
				</div>
			</footer>
		</div>
		</BrowserRouter>
	);
}

export default App;
