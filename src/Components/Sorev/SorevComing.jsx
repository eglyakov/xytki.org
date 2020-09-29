import React from 'react';
import SorevComingData from '../../data/sorevComingData.json';

const SorevComing = () => {

    const getSorevComing = () => {
        let list = SorevComingData.map((element, index) => {
            return (
                <li key={index} className="sorev-item">
                    <div className="sorev-item-title">{element.name}</div>
        
                    <div className="sorev-item-block">
                        <div className="img">
                            <img src={element.img} alt="банер соревнования" />
                            <div className="caption">
                                <div><span className="bold">Дата:</span> {element.date}</div>
                                <div><span className="bold">Регистрация:</span> {element.dateReg}</div>
                                <div><span className="bold">Место:</span> {element.place}</div>
                            </div>
                        </div>
        
                        <div className="btn-block">
                            <div className="btn-forum">Форум</div>
                            <div className="btn-map">Карта</div>
                        </div>
                        <div className="btn-regr">Подать заявку</div>
                    </div>
                </li>
            );
        });

        return list;
    }

    const prevSlide = () => {
        const carousel = document.querySelector('.sorev-list-coming'),
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
        const carousel = document.querySelector('.sorev-list-coming'),
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

        // let btnNext = document.querySelector('.next > .decor');
        // btnNext.addEventListener('mousedown', () => {
        //     btnNext.style.boxShadow = '0 0 2px rgba(65, 64, 64, 0.767)';
        //     console.log('asd')
        // });
        
        // btnNext.addEventListener('mouseup', () => {
        //     btnNext.style.boxShadow = '0 0 7px rgba(65, 64, 64, 0.767)';
        // });
    }
    
    return (
        <div className="wrapper-slider">
            <div className="sorev-slider">
                <ul className="sorev-list-coming">
                    {getSorevComing()}
                </ul>
            </div>
            <div className="strelka prev"><div className="decor" onClick={prevSlide}></div></div>
            <div className="strelka next"><div className="decor" onClick={nextSlide}></div></div>
        </div>
    );
}

export default SorevComing;