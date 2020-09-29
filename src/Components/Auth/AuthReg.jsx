import React from 'react';

const AuthReg = () => {
    return (
    <form className="form-regr">
        <input type="email" name="email" placeholder="Электронная почта" />
        <input type="password" name="password1" placeholder="Пароль" />
        <input type="password" name="password2" placeholder="Повтор пароль" />
        <input type="text" name="lastname" placeholder="Фамилия" />
        <input type="text" name="name" placeholder="Имя" />
        <input type="text" name="patronymic" placeholder="Отчество" />
        <button className="btn-form-regr">Зарегистрироваться</button>
    </form>
    );
}

export default AuthReg;