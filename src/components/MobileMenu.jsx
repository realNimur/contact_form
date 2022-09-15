import React from 'react';

const MobileMenu = () => {
  return (
    <div>
      <div className="mobile-menu" id="mobile-menu">
        <div className="mobile-menu__wrapper">
          <div className="mobile-menu__main">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a
                  href="http://spaaace.io/works/ru/"
                  className="mobile-menu__link"
                >
                  Работы
                </a>
              </li>
              <li className="mobile-menu__item">
                <a
                  href="http://spaaace.io/about/ru/"
                  className="mobile-menu__link"
                >
                  Cтудия
                </a>
              </li>
              <li className="mobile-menu__item">
                <a
                  href="http://spaaace.io/matching/ru/"
                  className="mobile-menu__link"
                >
                  Синхронизация
                </a>
              </li>
              <li className="mobile-menu__item">
                <a
                  href="http://spaaace.io/contact/ru/"
                  className="mobile-menu__link"
                >
                  Контакты
                </a>
              </li>
            </ul>
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <span className="mobile-menu__text">2005⏤2022</span>
              </li>
              <li className="mobile-menu__item">
                <span className="mobile-menu__text">Москва</span>
              </li>
            </ul>
            <ul className="mobile-menu__list mobile-menu__list--flex">
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">
                  Ru
                </a>
              </li>
              <li className="mobile-menu__item mobile-menu__item--active">
                <a href="/matching/apply/en/" className="mobile-menu__link">
                  En
                </a>
              </li>
            </ul>
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a
                  href="http://instagram.com/spaaacestudio/"
                  target="_blank"
                  className="mobile-menu__link"
                >
                  Инстаграм
                </a>
              </li>
              <li className="mobile-menu__item">
                <a
                  href="http://twitter.com/spaaacestudio/"
                  target="_blank"
                  className="mobile-menu__link"
                >
                  Твиттер
                </a>
              </li>
              <li className="mobile-menu__item" style={{ display: 'none' }}>
                <a href="#" className="mobile-menu__link">
                  Opensea
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__bottom">
            <a href="http://spaaace.io/ru/" className="mobile-menu__logotype">
              SPAAACE
            </a>
            <button className="mobile-menu__close" aria-label="Закрыть">
              <svg className="mobile-menu__close-icon">
                {/*<use xlink:href='/img/sprite.svg#icon-close'/>*/}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
