import React from 'react';

const Kuzov = () => {
    return (
        <div>
            <p>
                <label>Блокировка передний мост</label>
                <select name="ms1">
                    <option selected=""></option>
                    <option value="Нету">Нету</option>
                    <option value="Заводская">Заводская</option>
                    <option value="Установлена">Установлена</option>
                </select>
            </p>
            <p>
                <label>Блокировка задний мост</label>
                <select name="ms2">
                    <option selected=""></option>
                    <option value="Нету">Нету</option>
                    <option value="Заводская">Заводская</option>
                    <option value="Установлена">Установлена</option>
                </select>
            </p>
            <p>
                <label>Бортовые редукторы</label>
                <select name="ms3">
                    <option selected=""></option>
                    <option value="Нету">Нету</option>
                    <option value="УАЗ">УАЗ</option>
                    <option value="Laplander">Laplander</option>
                    <option value="Unimog">Unimog</option>
                    <option value="Pinzgauer">Pinzgauer</option>
                    <option value="Трактор">Трактор</option>
                    <option value="Прочие">Прочие</option>
                </select>
            </p>
        </div>
    );
}

export default Kuzov;