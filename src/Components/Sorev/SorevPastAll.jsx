import React from 'react';
import {getSorevPast} from './SorevPast'

const SorevPastAll = () => {    
    return (
        <div className="sorev-all">
            <h2 className="title">Прошедшие мероприятия</h2>
            <ul className="sorev-list-past">
                {getSorevPast()}
            </ul>
        </div>
    );
}

export default SorevPastAll;