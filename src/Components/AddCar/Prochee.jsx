import React from 'react';

const Kuzov = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="pr1" id="pr1"/>
                <label for="pr1">Шноркель</label>
            </p>
            <p>
                <input type="checkbox" name="pr2" id="pr2"/>
                <label for="pr2">Аптечка</label>
            </p>
            <p>
                <input type="checkbox" name="pr3" id="pr3"/>
                <label for="pr3">Огнетушитель</label>
            </p>
            <p>
                <label>Стандартные ремни безопасности (шт)</label>
                <input type="text" name="pr4" />
            </p>
            <p>
                <label>Спортивные ремни безопасности (шт)</label>
                <input type="text" name="pr5" />
            </p>
            <p className="dr-mod">
                <label>Другие модификации</label>
                <textarea type="text" name="pr5" />
            </p>
        </div>
    );
}

export default Kuzov;