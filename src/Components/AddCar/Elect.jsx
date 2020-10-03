import React from 'react';

const Elect = () => {
    return (
        <div>
            <p>
                <label>Количество генераторов</label>
                <input type="text" name="ec1" />
            </p>
            <p>
                <label>Количество аккумуляторов</label>
                <input type="text" name="ec2" />
            </p>
            <p>
                <input type="checkbox" name="ec3" id="ec3"/>
                <label for="ec3">Аккумулятор не на штатном месте</label>
            </p>
            <p>
                <input type="checkbox" name="ec4" id="ec4"/>
                <label for="ec4">Аккумулятор надёжно закреплён</label>
            </p>
            <p>
                <input type="checkbox" name="ec5" id="ec5"/>
                <label for="ec5">Клеммы накрыты сплошной диэлектрической крышкой</label>
            </p>
            <p>
                <input type="checkbox" name="ec6" id="ec6"/>
                <label for="ec6">Имеется выключатель массы</label>
            </p>
            <p>
                <input type="checkbox" name="ec7" id="ec7"/>
                <label for="ec7">Отсутствуют светотехническое оборудование</label>
            </p>
        </div>
    );
}

export default Elect;