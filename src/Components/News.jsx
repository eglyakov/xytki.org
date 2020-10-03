import React from 'react';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openNews: false
        }

        this.openNews = this.openNews.bind(this);
    }

    componentDidMount() {
        this.openNews();
    }

    openNews() {
        let newsMenu = document.querySelector('.news-menu'),
            site = document.querySelector('.xytki');

        if(site.clientWidth > 800 || !newsMenu) return;

        this.setState(prevState => ({
            openNews: !prevState.openNews
        }));

        if(this.state.openNews) {
            newsMenu.style.right = '0';
        } else {
            newsMenu.style.right = '-215px';
        }
    }

    render() {
        return (
            <div className="news-menu" onClick={this.openNews}>
                <div className="news-list">
                    <h3 className="title">Новости</h3>
                    <div className="news-item"><span className="bold">24 мар</span> <a href="/">Открываем регистрацию на Трофи-рейд "Зубры"</a></div>
                    <div className="news-item"><span className="bold">22 фев</span> <a href="/">Открыта регистрация на Коллекция TRAVEL</a></div>
                    <div className="news-item"><span className="bold">14 фев</span> <a href="/">Открыта регистрация на Коллекцию</a></div>
                    <div className="news-item"><span className="bold">10 фев</span> <a href="/">Найди друга</a></div>
                </div>

                <div className="burger">
                    <span className="icon-burg"></span>
                    <span className="icon-burg"></span>
                </div>

                {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Africa%2FNairobi&amp;src=ZGRhOXEydWkycHQ4cWVyajlkazZ0NW5wYm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%238E24AA&amp;showDate=1" frameborder="0" scrolling="no"></iframe> */}
            </div>
        );
    }
}

export default News;