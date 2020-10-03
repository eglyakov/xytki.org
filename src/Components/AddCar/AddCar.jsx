import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'; 

import Kuzov from './Kuzov';
import Kolesa from './Kolesa';
import Mosti from './Mosti';
import Podves from './Podves';
import Elect from './Elect';
import TVsist from './TVsist';
import Sistoh from './Sistoh';
import Prochee from './Prochee';


class AddCar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openTi: false,
            openLeb: false,
            openMa: false,
            calcDm1: '',
            calcDm2: ''
        }

        this.openTiParam = this.openTiParam.bind(this);
        this.openLebParam = this.openLebParam.bind(this);
        this.openMaParam = this.openMaParam.bind(this);
        this.calc = this.calc.bind(this);
    }

    openTiParam() {
        this.setState(prevState => ({
            openTi: !prevState.openTi
        }));
    }

    openLebParam() {
        this.setState(prevState => ({
            openLeb: !prevState.openLeb
        }));
    }

    openMaParam() {
        this.setState(prevState => ({
            openMa: !prevState.openMa
        }));
    }

    calc() {
        let razmerMm1 = document.querySelector('input[name=razmermm1]'),
            razmerMm2 = document.querySelector('input[name=razmermm2]'),
            result1 = 0,
            result2 = 0;

        result1 = +razmerMm1.value / 25.4;
        result2 = +razmerMm2.value / 25.4;

        result1 = Math.floor(result1);
        result2 = Math.floor(result2);


        this.setState(() => ({
            calcDm1: result1,
            calcDm2: result2,
        }));
    
    }

    render() {
        return (
            <BrowserRouter>
            <div className="addCar">
                <h2 className="addCar-title">Информация об автомобиле</h2>
                <div className="carInfo">
                    <div className="carInfoBlock">
                        <p className="">
                            <label>Марка*</label>
                            <select className="" name="marka" required="">
                                <option value="" selected></option>
                                <option value="Acura">Acura</option>
                                <option value="Alfa Romeo">Alfa Romeo</option>
                                <option value="ARO">ARO</option>
                                <option value="Asia">Asia</option>
                                <option value="Aston Martin">Aston Martin</option>
                                <option value="Audi">Audi</option>
                                <option value="Bentley">Bentley</option>
                                <option value="BMW">BMW</option>
                                <option value="Brilliance">Brilliance</option>
                                <option value="Buick">Buick</option>
                                <option value="BYD">BYD</option>
                                <option value="Cadillac">Cadillac</option>
                                <option value="Changan">Changan</option>
                                <option value="Chery">Chery</option>
                                <option value="Chevrolet">Chevrolet</option>
                                <option value="Chrysler">Chrysler</option>
                                <option value="Citroen">Citroen</option>
                                <option value="Dacia">Dacia</option>
                                <option value="Daewoo">Daewoo</option>
                                <option value="Daihatsu">Daihatsu</option>
                                <option value="Datsun">Datsun</option>
                                <option value="Dodge">Dodge</option>
                                <option value="Dong Feng">Dong Feng</option>
                                <option value="FAW">FAW</option>
                                <option value="Fiat">Fiat</option>
                                <option value="Ford">Ford</option>
                                <option value="FSO">FSO</option>
                                <option value="Geely">Geely</option>
                                <option value="GMC">GMC</option>
                                <option value="Great Wall">Great Wall</option>
                                <option value="Hafei">Hafei</option>
                                <option value="Haval">Haval</option>
                                <option value="Honda">Honda</option>
                                <option value="Hummer">Hummer</option>
                                <option value="Hyundai">Hyundai</option>
                                <option value="Infiniti">Infiniti</option>
                                <option value="Iran Khodro">Iran Khodro</option>
                                <option value="Isuzu">Isuzu</option>
                                <option value="JAC">JAC</option>
                                <option value="Jaguar">Jaguar</option>
                                <option value="Jeep">Jeep</option>
                                <option value="Kia">Kia</option>
                                <option value="Lada (ВАЗ)">Lada (ВАЗ)</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Lancia">Lancia</option>
                                <option value="Land Rover">Land Rover</option>
                                <option value="Lexus">Lexus</option>
                                <option value="Lifan">Lifan</option>
                                <option value="Lincoln">Lincoln</option>
                                <option value="Mahindra">Mahindra</option>
                                <option value="Maserati">Maserati</option>
                                <option value="Mazda">Mazda</option>
                                <option value="McLaren">McLaren</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                <option value="Mercury">Mercury</option>
                                <option value="MG">MG</option>
                                <option value="MINI">MINI</option>
                                <option value="Mitsubishi">Mitsubishi</option>
                                <option value="Nissan">Nissan</option>
                                <option value="Oldsmobile">Oldsmobile</option>
                                <option value="Opel">Opel</option>
                                <option value="Peugeot">Peugeot</option>
                                <option value="Plymouth">Plymouth</option>
                                <option value="Pontiac">Pontiac</option>
                                <option value="Porsche">Porsche</option>
                                <option value="Proton">Proton</option>
                                <option value="Ravon">Ravon</option>
                                <option value="Renault">Renault</option>
                                <option value="Roewe">Roewe</option>
                                <option value="Rover">Rover</option>
                                <option value="Saab">Saab</option>
                                <option value="Saipa">Saipa</option>
                                <option value="Santana">Santana</option>
                                <option value="Saturn">Saturn</option>
                                <option value="Scion">Scion</option>
                                <option value="SEAT">SEAT</option>
                                <option value="Shanghai Maple">Shanghai Maple</option>
                                <option value="Skoda">Skoda</option>
                                <option value="Smart">Smart</option>
                                <option value="SsangYong">SsangYong</option>
                                <option value="Subaru">Subaru</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Tata">Tata</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Tianma">Tianma</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Volkswagen">Volkswagen</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Vortex">Vortex</option>
                                <option value="Wartburg">Wartburg</option>
                                <option value="Zotye">Zotye</option>
                                <option value="ZX">ZX</option>
                                <option value="Богдан">Богдан</option>
                                <option value="ГАЗ">ГАЗ</option>
                                <option value="ЗАЗ">ЗАЗ</option>
                                <option value="ИЖ">ИЖ</option>
                                <option value="ЛуАЗ">ЛуАЗ</option>
                                <option value="Москвич">Москвич</option>
                                <option value="РАФ">РАФ</option>
                                <option value="ТагАЗ">ТагАЗ</option>
                                <option value="УАЗ">УАЗ</option>
                                <option value="Эксклюзив">Эксклюзив</option>
                            </select>
                        </p>
                        <p className="">
                            <label>Модель*</label>
                            <input type="text" className="" name="model" />
                        </p>
                        <p className="">
                            <label>Гос. номер</label>
                            <input type="text" className="" name="gosnomer" />
                        </p>
                        <p className="">
                            <label>Год выпуска*</label>
                            <input type="text" className="" name="year" />
                        </p>
                        <p className="">
                            <label>Объём двигателя (см<sup>3</sup>)*</label>
                            <input type="text" className="" name="dvig" />
                        </p>
                        <p className="">
                            <label>Топливо*</label>
                            <select className="" name="fuel">
                                <option value="" selected=""></option>
                                <option value="Бензин">Бензин</option>
                                <option value="Дизель">Дизель</option>
                                <option value="Газ/бензин">Газ/бензин</option>
                                <option value="Гибрид">Гибрид</option>
                                <option value="Электро">Электро</option>
                                <option value="Уран 235">Уран 235</option>
                            </select>
                        </p>
                        <p className="checkTurbo">
                            <input type="checkbox" id="rememberTurbo" name="remember_me" />
                            <label htmlFor="rememberTurbo">Наличие турбины</label>
                        </p>
                    </div>

                    <div className="carInfoBlock">
                        <p className="">
                            <label>Колесная формула*</label>
                            <select className="" name="kformula">
                                <option value="" selected=""> </option>
                                <option value="4x4">4x4</option>
                                <option value="4x2">4x2</option>
                                <option value="6x6">6x6</option>
                                <option value="8x8">8x8</option>
                                <option value="2x1">2x1</option>
                                <option value="Другая">Другая</option>
                            </select>
                        </p>
                        <p className="">
                            <label>Тип кузова</label>
                            <select className="" name="kuzov">
                                <option value="" selected=""></option>
                                <option value="внедорожник 3 дв.">внедорожник 3 дв.</option>
                                <option value="внедорожник 5 дв.">внедорожник 5 дв.</option>
                                <option value="кабриолет">кабриолет</option>
                                <option value="купе">купе</option>
                                <option value="минивэн">минивэн</option>
                                <option value="пикап">пикап</option>
                                <option value="родстер">родстер</option>
                                <option value="седан">седан</option>
                                <option value="универсал">универсал</option>
                                <option value="хэтчбек 3 дв.">хэтчбек 3 дв.</option>
                                <option value="хэтчбек 5 дв.">хэтчбек 5 дв.</option>
                                <option value="другой">другой</option>
                            </select>
                        </p>
                        <p className="">
                            <label>Имя авто или модификация</label>
                            <input type="text" className="form-control" name="modification" />
                        </p>
                        <p className="">
                            <label>Цвет</label>
                            <input type="text" className="form-control" name="color" />
                        </p>
                        <p className="">
                            <label>Коробка передач</label>
                            <select className="" name="korobka">
                                <option value="" selected=""></option>
                                <option value="Механическая">Механическая</option>
                                <option value="Автоматическая">Автоматическая</option>
                            </select>
                        </p>
                        <p className="">
                            <label>ФИО владельца по Техпаспорту</label>
                            <input type="text" className="" name="fiotex" />
                        </p>
                    </div>

                    <div className="carInfoBlock">
                        <p className="text-center">Страховка ТС</p>
                        <p className="">
                            <label>Дата с</label>
                            <input type="date" className="form-control" name="datesstrax" />
                        </p>
                        <p className="">
                            <label>Дата по</label>
                            <input type="date" className="form-control" name="datepostrax" />
                        </p>
                        <p className="">
                            <label>Серия и номер</label>
                            <input type="text" className="form-control" name="serinomstrax" />
                        </p>
                        <p className="">
                            <label>Страховая компания</label>
                            <select className="custom-select" name="compstrax">
                                <option value=""></option>
                                <option value="ЭРГО">ЭРГО</option>
                                <option value="БелВЭБ">БелВЭБ</option>
                                <option value="Белгосстрах">Белгосстрах</option>
                                <option value="Купала">Купала</option>
                                <option value="Промтрансинвест">Промтрансинвест</option>
                                <option value="Белэксимгарант">Белэксимгарант</option>
                                <option value="Белкоопстрах">Белкоопстрах</option>
                                <option value="Белнефтестрах">Белнефтестрах</option>
                                <option value="Имклива Иншуранс">Имклива Иншуранс</option>
                                <option value="КЕНТАВР">КЕНТАВР</option>
                                <option value="Приорлайф">Приорлайф</option>
                                <option value="Стравита">Стравита</option>
                                <option value="Ингосстрах">Ингосстрах</option>
                                <option value="Белросстрах">Белросстрах</option>
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

                <div className="carParam">
                    <div className="carParamBlock">
                        <div className="title" onClick={this.openTiParam}>Техническая информация</div>

                        {this.state.openTi ?
                        <div className="param">
                            <div className="paramBlock">
                                <div className="paramBlockItem">
                                    <p>Размер колес (мм)</p>
                                    <div className="wrapper">
                                        <input type="text" name="razmermm1"/>
                                        <p className="del">/</p>
                                        <input type="text" name="razmermm2"/>
                                    </div>
                                </div>

                                <div className="paramBlockItem">
                                    <p>Размер колес (")</p>
                                    <div className="wrapper">
                                        <input onFocus={this.calc} type="text" name="razmerd1" value={this.state.calcDm1} />
                                        <p className="del">/</p>
                                        <input onFocus={this.calc} type="text" name="razmerd2" value={this.state.calcDm2} />
                                    </div>
                                </div>

                                <p className="rel-title">Реальный размер колес</p>

                                <div className="paramBlockItem">
                                    <p>Диаметр (мм)</p>
                                    <input type="text" name="rel-dim" />
                                </div>

                                <div className="paramBlockItem">
                                    <p>Ширина (мм)</p>
                                    <input type="text" name="rel-shir"/>
                                </div>

                                <div className="paramBlockItem">
                                    <p>R (")</p>
                                    <input type="text" name="radius"/>
                                </div>
                            </div>

                            <div className="paramBlock">
                                <div className="paramBlockItem">
                                    <p>Колесная база (мм)</p>
                                    <input type="text" name="baza"/>
                                </div>

                                <div className="paramBlockItem">
                                    <p>Клиренс (мм)</p>
                                    <input type="text" name="klirens"/>
                                </div>

                                <div className="paramBlockItem">
                                    <p>Вес авто (кг)</p>
                                    <input type="text" name="weight"/>
                                </div>

                                <div className="paramBlockItem">
                                    <p>Угол въезда перед (град)</p>
                                    <input type="text" name="ugolper"/>
                                </div>

                                <div className="paramBlockItem">
                                    <p>Угол въезда зад (град)</p>
                                    <input type="text" name="ugolzad"/>
                                </div>
                            </div>
                        </div>
                        : null}
                    </div>

                    <div className="carParamBlock leb">
                        <div className="title" onClick={this.openLebParam}>Лебёдка</div>

                        {this.state.openLeb ?
                        <div className="param">
                            <div className="paramBlockItem">
                                <input type="checkbox" name="lebper" id="lebper"/>
                                <label for="lebper">Передняя</label>
                            </div>
                            <div className="paramBlockItem">
                                <input type="checkbox" name="lebzad" id="lebzad"/>
                                <label for="lebzad">Задняя</label>
                            </div>
                            <div className="paramBlockItem">
                                <input type="checkbox" name="lebperzad" id="lebperzad"/>
                                <label for="lebperzad">Перед/зад</label>
                            </div>
                            <div className="paramBlockItem">
                                <input type="checkbox" name="lebperenos" id="lebperenos"/>
                                <label for="lebperenos">Переносная</label>
                            </div>
                        </div>
                        : null}
                    </div>

                    <div className="carParamBlock modern">
                        <div className="title" onClick={this.openMaParam}>Модернизация автомобиля</div>

                        {this.state.openMa ?
                        <div className="param">
                            <div className="paramBlock">
                                <div className="titleModernBlock">Параметр:</div>
                                <button className="modern-btn"><NavLink to='/add-car/kuzov'>Кузов</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/kolesa'>Колёса</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/mosti'>Мосты</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/podves'>Подвеска</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/elect'>Электрика</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/tvsist'>Топливная и выхлопная система</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/sistoh'>Система охлаждения</NavLink></button>
                                <button className="modern-btn"><NavLink to='/add-car/prochee'>Прочее</NavLink></button>
                            </div>

                            <div className="paramBlock">
                                <div className="titleModernBlock">Выбор параметра:</div>
                                <Route path='/add-car/kuzov' component={Kuzov} />
                                <Route path='/add-car/kolesa' component={Kolesa} />
                                <Route path='/add-car/mosti' component={Mosti} />
                                <Route path='/add-car/podves' component={Podves} />
                                <Route path='/add-car/elect' component={Elect} />
                                <Route path='/add-car/tvsist' component={TVsist} />
                                <Route path='/add-car/sistoh' component={Sistoh} />
                                <Route path='/add-car/prochee' component={Prochee} />
                            </div>
                            
                        </div>
                        : null}
                    </div>
                </div>
                <div className="save"><button>Сохранить</button></div>
            </div>
            </BrowserRouter>
        );
    }
}

export default AddCar;


