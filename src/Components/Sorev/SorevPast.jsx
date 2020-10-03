import React from 'react';
import {Link} from 'react-router-dom';
import SorevPastData from '../../data/sorevPastData.json';
import img from '../../img/imgSorev.jpg';

// import {prevSlide, nextSlide} from './SorevComing'

export const getSorevPast = () => {
    let list = SorevPastData.map((element, index) => {
        return (
            <li key={index} className="sorev-item">
                <div className="sorev-item-title"><Link to={element.linkSorev}>{element.name}</Link></div>
    
                <div className="sorev-item-block">
                    <div className="img">
                        <img src={element.img || img} alt="банер соревнования" />
                        <div className="caption">
                            <div><span className="bold">Дата:</span> {element.date}</div>
                        </div>
                    </div>
    
                    <div className="btn-block">
                        <div className="btn-forum"><a href={element.linkForum} target="_blanck">Форум</a></div>
                        <div className="btn-map"><a href={element.linkMap} target="_blanck">Карта</a></div>
                    </div>
                    <div className="btn-photo"><Link to={element.linkPhoto}>Фото</Link></div>
                </div>
            </li>
        );
    });

    return list;
}

const SorevComing = () => {
    const prevSlide = () => {
        const carousel = document.querySelector('.sorev-list-past'),
            list = carousel.querySelectorAll('.sorev-item'),
            firstItem = list[0];

        if (!list || !firstItem) return;

        let firstItemWidth = firstItem.clientWidth,
            marginRight = 20,
            marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0,
            sumMarginLeft = marginLeft - firstItemWidth - marginRight;

        if((carousel.clientWidth + marginLeft) >= 0) {
            firstItem.style.marginLeft = `-${sumMarginLeft}px`;
        } else {
            return
        }
        
    }

    const nextSlide = () => {
        const carousel = document.querySelector('.sorev-list-past'),
            list = carousel.querySelectorAll('.sorev-item'),
            firstItem = list[0];

        if (!list || !firstItem) return;

        let firstItemWidth = firstItem.clientWidth,
            listWidthAll = 0,
            marginRight = 20,
            marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0,
            sumMarginLeft = marginLeft + firstItemWidth + marginRight;

        for(let i = 0; i < list.length; i++) {
            listWidthAll += list[i].clientWidth + marginRight;
        }    
        listWidthAll -= marginRight;

        if((carousel.clientWidth + marginLeft) < listWidthAll) {
            firstItem.style.marginLeft = `-${sumMarginLeft}px`;
        } else {
            return
        }
    }

    return (
        <div className="wrapper-slider">
            <div className="sorev-slider">
                <ul className="sorev-list-past">
                    {getSorevPast()}
                </ul>
            </div>
            <div className="strelka prev"><div className="decor" id="pastPrev" onClick={prevSlide}></div></div>
            <div className="strelka next"><div className="decor" id="pastNext" onClick={nextSlide}></div></div>
        </div>
    );
}

export default SorevComing;