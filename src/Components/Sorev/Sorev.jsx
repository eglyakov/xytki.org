import React from 'react';
import {NavLink} from 'react-router-dom';
import SorevComing from './SorevComing';
import SorevPast from './SorevPast';

class Sorev extends React.Component {
    componentDidMount() {
        this.checkButton();
    }

    checkButton() {
        const carouseComing = document.querySelector('.sorev-list-coming'),
            listComing = carouseComing.querySelectorAll('.sorev-item'),
            carouselPast = document.querySelector('.sorev-list-past'),
            listPast = carouselPast.querySelectorAll('.sorev-item');
            
        if (!listPast || !listComing) return;

        let listWidthAllComing = 0,
            listWidthAllPast = 0,
            marginRight = 20;

        let btnComingNext = document.getElementById('comingNext'),
            btnComingPrev = document.getElementById('comingPrev'),
            btnPastNext = document.getElementById('pastNext'),
            btnPastPrev = document.getElementById('pastPrev');


        for(let i = 0; i < listComing.length; i++) {
            listWidthAllComing += listComing[i].clientWidth + marginRight;
        }    
        listWidthAllComing -= marginRight;

        for(let i = 0; i < listPast.length; i++) {
            listWidthAllPast += listPast[i].clientWidth + marginRight;
        }    
        listWidthAllPast -= marginRight;


        if(carouseComing.clientWidth >= listWidthAllComing) {
            btnComingNext.style.display = 'none';
            btnComingPrev.style.display = 'none';
        }

        if(carouselPast.clientWidth >= listWidthAllPast) {
            btnPastNext.style.display = 'none';
            btnPastPrev.style.display = 'none';
        }
    }

    render() {
        return (
            <div className="sorev">               
                <h2 className="title"><NavLink to='/sorev-coming-all'>Предстоящие мероприятия</NavLink></h2>
                <SorevComing />
    
                <h2 className="title"><NavLink to='/sorev-past-all'>Прошедшие мероприятия</NavLink></h2>	
                <SorevPast />
            </div>
        );
    }
}

export default Sorev;