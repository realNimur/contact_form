import React from 'react';

const Form = () => {
  return (
    <form className='main' id='main' action='/matching/apply/success/ru/'>
      <div className='container'>
        <div className='row'>
          <div className='col-3 col-mobile-4'>
            <h1 className='txt-88 txt-44-mobile'>Планируем звонок</h1>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>1.</span>
          </div>
          <div className='col-5'>
            <span className='txt-22 uppercase'>Ваш проект – это</span>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>1.</span>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-3 col-offset-1 col-mobile-5 col-offset-mobile-0'>
            <span className='txt-44 uppercase'>Физичес&shy;кий продукт</span>
          </div>
          <div className='col-1'>
            <label htmlFor='pp' className='true-checkbox'>
              <input type='checkbox' id='pp' className='true-checkbox__input' />
              <span className='true-checkbox__value true-checkbox__value--default'>Нет</span>
              <span className='true-checkbox__value true-checkbox__value--checked'>Да</span>
            </label>
          </div>
        </div>
        <div className='row row-offset-20'>
          <div className='col-3 col-offset-1 col-mobile-5 col-offset-mobile-0'>
            <span className='txt-44 uppercase'>Приложе&shy;ние</span>
          </div>
          <div className='col-1'>
            <label htmlFor='app' className='true-checkbox'>
              <input type='checkbox' id='app' className='true-checkbox__input' />
              <span className='true-checkbox__value true-checkbox__value--default'>Нет</span>
              <span className='true-checkbox__value true-checkbox__value--checked'>Да</span>
            </label>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>2.</span>
          </div>
          <div className='col-5'>
            <span className='txt-22 uppercase'>Ваш бюджет</span>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>2.</span>
          </div>
        </div>
        <div className='row row-offset-40 row-offset-mobile-80'>
          <div className='col-3 col-offset-1 col-mobile-5 col-offset-mobile-0'>
            <span className='txt-44 uppercase'>> 10.000 USD</span>
          </div>
          <div className='col-1'>
            <label htmlFor='budget' className='true-checkbox'>
              <input type='checkbox' id='budget' className='true-checkbox__input' checked />
              <span className='true-checkbox__value true-checkbox__value--default'>Нет</span>
              <span className='true-checkbox__value true-checkbox__value--checked'>Да</span>
            </label>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>3.</span>
          </div>
          <div className='col-5'>
            <span className='txt-22 uppercase'>Ваше имя</span>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>3.</span>
          </div>
        </div>
        <div className='row row-offset-40 row-offset-mobile-80'>
          <div className='col-2 col-offset-1 col-mobile-5 col-offset-mobile-0'>
            <input type='text' className='input-control' placeholder='' value='' />
          </div>
          <div className='col-1 col-offset-1 d-none-mobile'>
            <span className='txt-22'>Ага</span>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>4.</span>
          </div>
          <div className='col-5'>
            <span className='txt-22 uppercase'>Email</span>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>4.</span>
          </div>
        </div>
        <div className='row row-offset-40 row-offset-mobile-80'>
          <div className='col-2 col-offset-1 col-mobile-5 col-offset-mobile-0'>
            <input type='text' className='input-control' placeholder='' value='' />
          </div>
          <div className='col-1 col-offset-1 col-offset-mobile-0 d-none-mobile'>
            <span className='txt-22'>Есть</span>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>5.</span>
          </div>
          <div className='col-5'>
            <span className='txt-22 uppercase'>Выберите дату в августе</span>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>5.</span>
          </div>
        </div>
        <div className='row row-offset-40 row-offset-mobile-80'>
          <div className='col-2 col-offset-1 col-mobile-6 col-offset-mobile-0'>
            <div className='c-calendar'>
              <div className='c-calendar__top'>
                <span className='c-calendar__elem txt-16'>П</span>
                <span className='c-calendar__elem txt-16'>В</span>
                <span className='c-calendar__elem txt-16'>С</span>
                <span className='c-calendar__elem txt-16'>Ч</span>
                <span className='c-calendar__elem txt-16'>П</span>
                <span className='c-calendar__elem txt-16 light'>С</span>
                <span className='c-calendar__elem txt-16 light'>В</span>
              </div>
              <div className='c-calendar__main'>
                <a href='#' className='c-calendar__elem txt-22'>1</a>
                <a href='#' className='c-calendar__elem txt-22'>2</a>
                <a href='#' className='c-calendar__elem txt-22'>3</a>
                <a href='#' className='c-calendar__elem txt-22'>4</a>
                <a href='#' className='c-calendar__elem txt-22'>5</a>
                <a href='#' className='c-calendar__elem txt-22 light'>6</a>
                <a href='#' className='c-calendar__elem txt-22 light'>7</a>
                <a href='#' className='c-calendar__elem txt-22'>8</a>
                <a href='#' className='c-calendar__elem txt-22'>9</a>
                <a href='#' className='c-calendar__elem txt-22'>10</a>
                <a href='#' className='c-calendar__elem txt-22 medium underline'>11</a>
                <a href='#' className='c-calendar__elem txt-22'>12</a>
                <a href='#' className='c-calendar__elem txt-22 light'>13</a>
                <a href='#' className='c-calendar__elem txt-22 light'>14</a>
                <a href='#' className='c-calendar__elem txt-22 line-through'>15</a>
                <a href='#' className='c-calendar__elem txt-22'>16</a>
                <a href='#' className='c-calendar__elem txt-22'>17</a>
                <a href='#' className='c-calendar__elem txt-22'>18</a>
                <a href='#' className='c-calendar__elem txt-22 line-through'>19</a>
                <a href='#' className='c-calendar__elem txt-22 light'>20</a>
                <a href='#' className='c-calendar__elem txt-22 light'>21</a>
                <a href='#' className='c-calendar__elem txt-22'>22</a>
                <a href='#' className='c-calendar__elem txt-22'>23</a>
                <a href='#' className='c-calendar__elem txt-22'>24</a>
                <a href='#' className='c-calendar__elem txt-22'>25</a>
                <a href='#' className='c-calendar__elem txt-22'>26</a>
                <a href='#' className='c-calendar__elem txt-22 light'>27</a>
                <a href='#' className='c-calendar__elem txt-22 light'>28</a>
                <a href='#' className='c-calendar__elem txt-22'>29</a>
                <a href='#' className='c-calendar__elem txt-22'>30</a>
              </div>
            </div>
          </div>
        </div>
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>6.</span>
          </div>
          <div className='col-5'>
            <button className='btn txt-44 uppercase' type='submit'>Отправить</button>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>6.</span>
          </div>
        </div>
        <div className='row row-offset-160'>
        </div>
      </div>
    </form>
  );
};

export default Form;