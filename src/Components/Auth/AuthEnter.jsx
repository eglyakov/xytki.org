import React from 'react';
import iconG from '../../img/icon-google.png';
import iconY from '../../img/icon-yandex.png';

const AuthEnter = () => {
    return (
        <form className="form-enter">
            <input type="email" name="email" placeholder="Электронная почта" />
            <input type="password" name="password1" placeholder="Пароль" />
            <div className="reset-pass">Забыли пароль?</div>
            <button className="btn-form-enter">Войти</button>

            <div className="remember-block">
                <input type="checkbox" name="remember_me" id="remember" />
                <label for="remember">Запомнить меня</label>
            </div>

            <div className="or">Или</div>
            <a href="https://accounts.google.com/o/oauth2/auth?redirect_uri=https://xytki.org/auth.php&amp;response_type=code&amp;client_id=702470457448-b757i4dqoguheebdqet5i6eo7st8pqru.apps.googleusercontent.com&amp;scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile">
                <button className="btn-google">
                    <div className="icon"><img src={iconG} alt="иконка гугл"/></div>
                    <div className="caption">Войти с помощью Google</div>
                </button>
            </a>

            <a href="https://oauth.yandex.ru/authorize?response_type=code&amp;client_id=b3922cce882f4a37b8748e0ad6b1f698&amp;display=popup">
                <button className="btn-yandex">
                    <div className="icon"><img src={iconY} alt="иконка яндекс"/></div>
                    <div className="caption">Войти с помощью Яндекс</div>
                </button>
            </a>
        </form>
    );
}

export default AuthEnter;