import React from 'react';

const Kuzov = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="pd1" id="pd1"/>
                <label for="pd1">Замена рессор на пружины</label>
            </p>
            <p>
                <input type="checkbox" name="pd2" id="pd2"/>
                <label for="pd2">Перенесены точки крепления амортизаторов</label>
            </p>
            <p>
                <input type="checkbox" name="pd3" id="pd3"/>
                <label for="pd3">Количество амортизаторов больше штатного</label>
            </p>
        </div>
    );
}

export default Kuzov;