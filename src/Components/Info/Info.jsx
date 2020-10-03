import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'; 

import Opf from './OPF';
import Ovt from './OVT';
import Ppot from './PPOT';

const Info = () => {
    return (
        <BrowserRouter>
        <div className="info width">
            <h2 className="title">Информация</h2>
            <div className="block">
                <div className="date">08.06.2020</div>
                <div className="item"><NavLink to="/info/opf">Основные правила фотофиксации (взятия) точек</NavLink></div>
            </div>
            
            <div className="block">
                <div className="date">09.06.2020</div>
                <div className="item"><NavLink to="/info/ovt">Особенности взятия точек на Онлайн-Трофи</NavLink></div>
            </div>
            
            <div className="block">
                <div className="date">09.06.2020</div>
                <div className="item"><NavLink to="/info/ppot">ППОТ (Порядок Проведения Онлайн Трофи)</NavLink></div>
            </div>

            <Route path="/info/opf" component={Opf} />
            <Route path="/info/ovt" component={Ovt} />
            <Route path="/info/ppot" component={Ppot} />

        </div>
        </BrowserRouter>
    );
}

export default Info;