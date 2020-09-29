import React from 'react';
import SorevPastData from '../../data/sorevPastData.json';


const SorevComing = () => {
    const getSorevPast = () => {
        let list = SorevPastData.map((element, index) => {
            return (
                <li key={index} className="sorev-item">
                    <div className="sorev-item-title">{element.name}</div>
        
                    <div className="sorev-item-block">
                        <div className="img">
                            <img src={element.img} alt="банер соревнования" />
                            <div className="caption">
                                <div><span className="bold">Дата:</span> {element.date}</div>
                            </div>
                        </div>
        
                        <div className="btn-block">
                            <div className="btn-forum">Форум</div>
                            <div className="btn-map">Карта</div>
                        </div>
                        <div className="btn-photo">Фото</div>
                    </div>
                </li>
            );
        });

        return list;
    }

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

        if((carousel.clientWidth + marginLeft) < listWidthAll - marginRight) {
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
            <div className="strelka prev"><div className="decor" onClick={prevSlide}></div></div>
            <div className="strelka next"><div className="decor" onClick={nextSlide}></div></div>
        </div>
    );
}

export default SorevComing;