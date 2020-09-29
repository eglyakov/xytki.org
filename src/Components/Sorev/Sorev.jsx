import React from 'react';
import SorevComing from './SorevComing';
import SorevPast from './SorevPast';

const Sorev = () => {
    return (
        <div className="sorev">               
            <h2 className="sorev-title">Предстоящие мероприятия</h2>
            <SorevComing />

            <h2 className="sorev-title">Прошедшие мероприятия</h2>	
            <SorevPast />
        </div>
    );
}

export default Sorev;