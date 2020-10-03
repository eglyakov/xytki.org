import React from 'react';

const Kuzov = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="tv1" id="tv1"/>
                <label for="tv1">Нештатный топливный бак</label>
            </p>
            <p>
                <input type="checkbox" name="tv2" id="tv2"/>
                <label for="tv2">Топливопровод проходит через кабину</label>
            </p>
            <p>
                <input type="checkbox" name="tv3" id="tv3"/>
                <label for="tv3">Выхлопная система не оригинальная</label>
            </p>
        </div>
    );
}

export default Kuzov;