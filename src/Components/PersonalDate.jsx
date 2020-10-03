import React from 'react';
// import {BrowserRouter, NavLink, Route} from 'react-router-dom'; 


class PersonalDate extends React.Component {

    render() {
        return (
            <div className="person width">
                <h2 className="title">Личные данные</h2>
                <div className="infoBlock">
                    <div className="inputBlock">
                        <p>
                            <label>Фамилия*</label>
                            <input type="text" name="first_name" />
                        </p>
                        <p>
                            <label>Имя*</label>
                            <input type="text" name="last_name" />
                        </p>
                        <p>
                            <label>Отчество*</label>
                            <input type="text" name="father_name" />
                        </p>
                        <p>
                            <label>Телефон*</label>
                            <input type="phone" name="phone" placeholder="+375(  )" />
                        </p>
                    </div>

                    <div className="inputBlock">
                        <p>
                            <label>Пол</label>
                            <select name="pol">
                                <option value="" selected=""> </option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                        </p>
                        <p>
                            <label>Дата с</label>
                            <input type="date" name="berthday" />
                        </p>
                        <p>
                            <label>Город</label>
                            <input type="text" name="city" />
                        </p>
                        <p>
                            <label>Гражданство</label>
                            <input type="text" name="grazhd" />
                        </p>
                    </div>

                    <div className="inputBlock">
                        <p>
                            <label>Ник</label>
                            <input type="text"  name="nik" />
                        </p>
                        <p>
                            <label>Клуб</label>
                            <input type="text" name="club" />
                        </p>
                        <p>
                            <label>Рязряд / звание</label>
                            <select name="razryad">
                                <option value="" selected=""> </option>
                                <option value="МС">МС</option>
                                <option value="КМС">КМС</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </p>
                    </div>

                    <div className="addImg">
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


