import React from 'react';
// import {BrowserRouter, NavLink, Route} from 'react-router-dom'; 


class PersonalDate extends React.Component {

    render() {
        return (
            <div className="addCar">
                <h2 className="addCar-title">Личные данные</h2>
                <div className="carInfo">
                    <div className="carInfoBlock">
                        <p className="">
                            <label>Фамилия*</label>
                            <input type="text" className="" name="first_name" />
                        </p>
                        <p className="">
                            <label>Имя*</label>
                            <input type="text" className="" name="last_name" />
                        </p>
                        <p className="">
                            <label>Отчество*</label>
                            <input type="text" className="" name="father_name" />
                        </p>
                        <p className="">
                            <label>Телефон*</label>
                            <input type="phone" className="" name="phone" placeholder="+375(  )" />
                        </p>
                    </div>

                    <div className="carInfoBlock">
                        <p className="">
                            <label>Пол</label>
                            <select className="" name="pol">
                                <option value="" selected=""> </option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                        </p>
                        <p className="">
                            <label>Дата с</label>
                            <input type="date" name="berthday" />
                        </p>
                        <p className="">
                            <label>Город</label>
                            <input type="text" className="" name="city" />
                        </p>
                        <p className="">
                            <label>Гражданство</label>
                            <input type="text" className="" name="grazhd" />
                        </p>
                    </div>

                    <div className="carInfoBlock">
                        <p className="">
                            <label>Ник</label>
                            <input type="text"  name="nik" />
                        </p>
                        <p className="">
                            <label>Клуб</label>
                            <input type="text" name="club" />
                        </p>
                        <p className="">
                            <label>Рязряд / звание</label>
                            <select className="" name="razryad">
                                <option value="" selected=""> </option>
                                <option value="МС">МС</option>
                                <option value="КМС">КМС</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </p>
                    </div>

                    <div className="carAddImg">
                        <div className="caption1">
                            Перетащите сюда файл для загрузки<br />
                            или
                        </div>

                        <input type="file" name="imgCar" />

                        <div className="caption2">
                            Поддерживаемые форматы: png, jpg, jpeg, gif.<br />
                            Максимальный размер файла: 5 MB.
                        </div>
                    </div>
                </div>
                <div className="save"><button>Сохранить</button></div>
            </div>
        );
    }
}

export default PersonalDate;


