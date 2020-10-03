import React from 'react';
import SorevComingData from '../../data/sorevComingData.json';
import {Link} from 'react-router-dom';
import img from '../../img/imgSorev.jpg'
import logoImg from '../../img/logo.png';

const SorevItem = () => {
    const getSorevComing = () => {
        let list = SorevComingData.map((element, index) => {
            return (
                <li key={index} className="sorev-item">
                    <div className="sorev-item-title"><Link to={element.linkSorev}>{element.name}</Link></div>
        
                    <div className="sorev-item-block">
                        <div className="img">
                            <img src={element.img || logoImg} alt="банер соревнования" />
                            <div className="caption">
                                <div><span className="bold">Дата:</span> {element.date}</div>
                                <div><span className="bold">Регистрация:</span> {element.dateReg}</div>
                                <div><span className="bold">Место:</span> {element.place}</div>
                            </div>
                        </div>
        
                        <div className="btn-block">
                            <div className="btn-forum"><a href={element.linkForum} target="_blanck">Форум</a></div>
                            <div className="btn-map"><a href={element.linkMap} target="_blanck">Карта</a></div>
                        </div>
                        <div className="btn-regr"><Link to={element.linkSorev}>Подать заявку</Link></div>
                    </div>
                </li>
            );
        });

        return list;
    }
    
    return (
        <div className="wrapper-slider">
            {getSorevComing()}
        </div>
    );
}

export default SorevItem;