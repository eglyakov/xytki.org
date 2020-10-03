import React from 'react';
import {getSorevComing} from './SorevComing'

const SorevComingAll = () => {
    
    return (       
        <div className="sorev-all">
            <h2 className="title">Предстоящие мероприятия</h2>
            <ul className="sorev-list-coming">
                {getSorevComing()}
            </ul>
        </div>
    );
}

export default SorevComingAll;