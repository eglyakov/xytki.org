import React from 'react';
import {NavLink} from 'react-router-dom'; 

const Ovt = () => {
    return (
        <div className="infoPage">
            <h4 className="title">Особенности взятия точек на Онлайн-Трофи</h4>
            <div className="caption">2020-06-09</div>
            <p>В дополнении к <NavLink to='/info/opf'>Основным правилам фотофиксации (взятия) точек</NavLink>, частные изменения по соревнованию Онлайн-Трофи:</p>

            <ul>
                <li>Фото отправлять в личку через вайбер судье (сообщается номер до начала соревнования). В конце заезда отправляете сообщение со словом ФИНИШ, что будет означать закрытие зачета. Фото, которые придут после слова ФИНИШ, приниматся не будут. (в случае не засчитывания судьей фотографии КТ по причине низкого качества фотографии, высланной во время гонки, можно в течении 30 минут после публикации результатов (или предварительных) можно показать судье ОРИГИНАЛ на носителе в хорошем качестве где будет видно все необходимое для зачета КТ.)</li>
                <li>Фото отправлять сразу, по факту взятия точки и в порядке взятия точек.</li>
                <li>Уникальный знак (или уникальный предмет) сообщается участнику в момент старта, когда и передаётся файл с точками в Viber-группе участников.</li>
                <li>Участник самостоятельно контролирует полную отправку фотографий судье (на соревнованиях часто плохое покрытие и интернет есть не везде - проверяйте чтобы все фотографии отправились без ошибок).</li>
                <li>Двери, багажник и др. открывать ЗАПРЕЩЕНО !</li>
            </ul>
        </div>
    );
}

export default Ovt;