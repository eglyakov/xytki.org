import React from 'react';

const Kuzov = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="kz1" id="kz1"/>
                <label for="kz1">Обрезан спереди или сзади</label>
            </p>
            <p>
                <input type="checkbox" name="kz2" id="kz2"/>
                <label for="kz2">По заводу мягкая крышка</label>
            </p>
            <p>
                <label>Передний бампер</label>
                <select name="kz3">
                    <option value="" selected> </option>
                    <option value="Оригинальный">Оригинальный</option>
                    <option value="Силовой">Силовой</option>
                    <option value="Отсутсвует">Отсутсвует</option>
                </select>
            </p>
            <p>
                <label>Задний бампер</label>
                <select name="kz4">
                    <option value="" selected> </option>
                    <option value="Оригинальный">Оригинальный</option>
                    <option value="Силовой">Силовой</option>
                    <option value="Отсутсвует">Отсутсвует</option>
                </select>
            </p>
            <p>
                <input type="checkbox" name="kz5" id="kz5"/>
                <label for="kz5">Отсутствует защитная панель перед механизмом стеклоподъёмников</label>
            </p>
        </div>
    );
}

export default Kuzov;