import React from 'react';

const Kolesa = () => {
    return (
        <div>
            <p>
                <input type="checkbox" name="kl1" id="kl1"/>
                <label for="kl1">Наличие доп. фиксации покрышки (бэдлок, аирлок, хамп)</label>
            </p>
            <p>
                <input type="checkbox" name="kl2" id="kl2"/>
                <label for="kl2">Изменение рисунка протектора методом нарезки</label>
            </p>
            <p>
                <input type="checkbox" name="kl3" id="kl3"/>
                <label for="kl3">Колеса сверху полностью закрыты крыльями или расширителями арок</label>
            </p>
        </div>
    );
}

export default Kolesa;