import React from 'react';

const Header = ({ isSuccessSubmit = false }) => {
  return (
    <>
      {isSuccessSubmit ? (
        <header className="header @@current" id="header">
          <div className="header__wrapper">
            <div className="header__group">
              <ul className="header__list header__list--mobile">
                <li className="header__item header__item--active">
                  <a href="#" className="header__elem" id="menu-toggle">
                    Меню
                  </a>
                </li>
                <li className="header__item">
                  <a href="#" className="header__elem">
                    Ru
                  </a>
                </li>
                <li className="header__item header__item--active">
                  <a href="/matching/en/" className="header__elem">
                    En
                  </a>
                </li>
              </ul>
              <ul className="header__list header__list--desktop">
                <li className="header__item @@works">
                  <a href="/works/ru/" className="header__elem">
                    Работы
                  </a>
                </li>
                <li className="header__item @@studio">
                  <a href="/about/ru/" className="header__elem">
                    Студия
                  </a>
                </li>
                <li className="header__item @@matching header__item--active">
                  <a href="/matching/ru/" className="header__elem">
                    Do we match?
                  </a>
                </li>
                <li className="header__item @@contacts">
                  <a href="/contact/ru/" className="header__elem">
                    Контакты
                  </a>
                </li>
                <li className="header__item">
                  <span className="header__elem">2005⏤2022</span>
                </li>
                <li className="header__item">
                  <span className="header__elem">Москва</span>
                </li>
                <li className="header__item header__item--active">
                  <a href="#" className="header__elem">
                    Ru
                  </a>
                </li>
                <li className="header__item">
                  <a href="/matching/en/" className="header__elem">
                    En
                  </a>
                </li>
                <li className="header__item">
                  <a
                    href="http://instagram.com/spaaacestudio/"
                    target="_blank"
                    className="header__elem"
                  >
                    Инстаграм
                  </a>
                </li>
                <li className="header__item">
                  <a
                    href="http://twitter.com/spaaacestudio/"
                    target="_blank"
                    className="header__elem"
                  >
                    Твиттер
                  </a>
                </li>
                <li className="header__item" style={{ display: 'none' }}>
                  <a href="#" className="header__elem">
                    Opensea
                  </a>
                </li>
              </ul>
            </div>
            <span className="header__page">/Успех/</span>
          </div>
        </header>
      ) : (
        <header className="header @@current" id="header">
          <a
            href="http://spaaace.io/ru/"
            className="fixed-logotype"
            id="fixed-logotype"
          >
            SPAAACE
          </a>
          <div className="header__wrapper">
            <div className="header__group">
              <ul className="header__list header__list--mobile">
                <li className="header__item header__item--active">
                  <a href="#" className="header__elem" id="menu-toggle">
                    Меню
                  </a>
                </li>
                <li className="header__item header__item--active">
                  <a href="#" className="header__elem">
                    Ru
                  </a>
                </li>
                <li className="header__item">
                  <a href="/matching/apply/en/" className="header__elem">
                    En
                  </a>
                </li>
              </ul>
              <ul className="header__list header__list--desktop">
                <li className="header__item @@works">
                  <a
                    href="http://spaaace.io/works/ru/"
                    className="header__elem"
                  >
                    Работы
                  </a>
                </li>
                <li className="header__item @@studio">
                  <a
                    href="http://spaaace.io/about/ru/"
                    className="header__elem"
                  >
                    Студия
                  </a>
                </li>
                <li className="header__item @@matching">
                  <a
                    href="http://spaaace.io/matching/ru/"
                    className="header__elem"
                  >
                    Синхронизация
                  </a>
                </li>
                <li className="header__item @@contacts">
                  <a
                    href="http://spaaace.io/contact/ru/"
                    className="header__elem"
                  >
                    Контакты
                  </a>
                </li>
                <li className="header__item">
                  <span className="header__elem">2005⏤2022</span>
                </li>
                <li className="header__item">
                  <span className="header__elem">Москва</span>
                </li>
                <li className="header__item header__item--active">
                  <a href="#" className="header__elem">
                    Ru
                  </a>
                </li>
                <li className="header__item">
                  <a href="/matching/apply/en/" className="header__elem">
                    En
                  </a>
                </li>
                <li className="header__item">
                  <a
                    href="http://instagram.com/spaaacestudio/"
                    target="_blank"
                    className="header__elem"
                  >
                    Инстаграм
                  </a>
                </li>
                <li className="header__item">
                  <a
                    href="http://twitter.com/spaaacestudio/"
                    target="_blank"
                    className="header__elem"
                  >
                    Твиттер
                  </a>
                </li>
                <li className="header__item" style={{ display: 'none' }}>
                  <a href="#" className="header__elem">
                    Opensea
                  </a>
                </li>
              </ul>
            </div>
            <span className="header__page">/Синхронизация/</span>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
